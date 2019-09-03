import React from 'react'
import {connect} from 'react-redux';
import ProfileData from "./ProfileData";

class ProfileDataContainer extends React.Component {
    
    render() {
      return <ProfileData {...this.props}/>
    }
  }

let mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profiles
    }
};



export default  connect(mapStateToProps)(ProfileDataContainer);
 