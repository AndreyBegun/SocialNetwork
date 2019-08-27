import React from 'react';
import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';
import { getUsersProfile } from './../../Reducers-BLL/ProfileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';



class ProfilePageContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1047
        }
        this.props.getUsersProfile(userId)
    }


    render() {
        return (
            <ProfilePage {...this.props} profiles={this.props.profiles} />
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfilePageContainer)  //hoc

let mapStateToProps = (state) => ({
    profiles: state.profilePage.profiles
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getUsersProfile })(WithUrlDataContainerComponent);

