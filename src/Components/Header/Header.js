import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = ({isAuth, userInfo, logOut}) => {
    const onLogOutClick = () => {
        logOut();

    }
    return (
        <div className={s.header}>

                <img src='https://cdn.auth0.com/blog/react-redux/logo.png' alt=''/>
               

            {isAuth && <div> {userInfo.userName} - <span onClick={onLogOutClick}>Log out</span> </div>}
            {!isAuth && <div> <NavLink to='/login'>Sign In</NavLink> </div>}

        </div>

    );
}


export default Header;
