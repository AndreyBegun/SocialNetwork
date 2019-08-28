import React from 'react';
import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';
import { getUsersProfile } from './../../Reducers-BLL/ProfileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



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



let mapStateToProps = (state) => ({
    profiles: state.profilePage.profiles
});

export default compose(
    connect(mapStateToProps, { getUsersProfile }),
    withRouter,
    withAuthRedirect
)(ProfilePageContainer)
