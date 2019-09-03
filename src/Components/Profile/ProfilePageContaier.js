import React from 'react';
import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';
import { getUsersProfile, getStatus, updateStatus } from './../../Reducers-BLL/ProfileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfilePageContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1047
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <ProfilePage {...this.props}
                profiles={this.props.profiles}
                status={this.props.status}
                updateStatus={this.props.updateStatus}

            />
        )
    }
}

let mapStateToProps = (state) => ({
    profiles: state.profilePage.profiles,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfilePageContainer)
