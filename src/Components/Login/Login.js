import React from 'react';
import s from './Login.module.css';
import {connect} from "react-redux";
import {login} from "../../Reducers-BLL/LoginReducer";
import {statuses} from "../Friends/FriendsReducer";
import {Redirect} from "react-router-dom";

export const Login = ({status, login, message, isAuth}) => {

    if (isAuth) {

        return <Redirect to='/'/>
    }

    let loginRef = React.createRef();
    let paswordRef = React.createRef();
    let rememberMeRef = React.createRef();

    const onLoginClick = () => {
        login && login(loginRef.current.value, paswordRef.current.value, rememberMeRef.current.checked)
    };
    const onRegistrationClick = () => {
        window.location = 'https://social-network.samuraijs.com/'
    };

    let errorStatusBlock = status === statuses.ERROR &&
        <div className='error'> {message}</div>


    return (
        <div className={s.loginPanel}>

            <div className={s.loginRegistration}>
                <div>
                    <button onClick={onLoginClick}>Login</button>
                </div>
                <div>
                    <button onClick={onRegistrationClick}>Registration</button>
                </div>
            </div>
            <div className={s.loginInputs}>
                Email
                <input ref={loginRef} type="email" placeholder="Email@" defaultValue='drunya35@gmail.com'/>
                Passward
                <input ref={paswordRef} type="password" placeholder="Password" defaultValue='100300'/>
            </div>
            <div className={s.loginRegistration}>
                <input ref={rememberMeRef} type="checkbox"/>
                <h5>Remember me</h5>
                <input type="button" disabled={status === statuses.INPROGRESS} value="Login" onClick={onLoginClick}/>
            </div>

            {errorStatusBlock}

        </div>
    );
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    status: state.login.status,
    message: state.login.message,
    captchaUrl: state.login.captchaUrl
});
let mapDispatchToProps = (dispatch) => ({
    login: (email, password, rememberMe) => {
        dispatch(login(email, password, rememberMe))
    },
});

let LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
export default LoginContainer
