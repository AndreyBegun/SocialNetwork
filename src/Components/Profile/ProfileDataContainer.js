
import {connect} from 'react-redux';
import ProfileData from "./ProfileData";


let mapStateToProps = (state) => {

    return {
        profileData: state.profilePage.profiles
    }
};
let mapDispatchToProps = (dispatch) => {
    return{}
};

let ProfileDataContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileData);
export default ProfileDataContainer
