
import {connect} from 'react-redux';
import ProfilePage from "./ProfilePage";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

let ProfilePageContainer = connect(mapStateToProps,mapDispatchToProps)(ProfilePage);
export default ProfilePageContainer
