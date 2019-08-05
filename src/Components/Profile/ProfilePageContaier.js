import React from 'react';
import {connect} from 'react-redux';
import ProfilePage from './ProfilePage';
import axios from './../../DAL/axios-instance';
import { setUserProfileAC } from './../../Reducers-BLL/ProfileReducer';

class ProfilePageContainer extends React.Component {

    componentDidMount() {
       
       
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1047`)
            .then(response =>{
                
                this.props.setUserProfileAC(response.data);
            })
    }
    render() {

        return(
            <ProfilePage profiles={this.props.profiles} {...this.props} />
        )
    }
}


let mapStateToProps = (state) => ({
    
        profiles: state.profilePage.profiles

    
});



export default connect(mapStateToProps, {setUserProfileAC})(ProfilePageContainer);
 
