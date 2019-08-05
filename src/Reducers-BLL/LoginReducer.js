import axios from '../DAL/axios-instance';
import {me, setIsAuth} from "./AuthReducer";


const SET_STATUS = 'App/Login/SET_STATUS';
const SET_MESSAGE = 'App/Login/SET_MESSAGE';

export const statuses = {
    INIT: 'INIT',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    CAPTCHAREQUIRED: 'CAPTCHAREQUIRED',
    SUCCESS: 'SUCCESS'

}

let initialState = {
    status: statuses.INIT,
    message: '',
    captchaUrl:''
}

export const setStatus = (status) => ({type: SET_STATUS, status});
export const setMessage = (message) => ({type: SET_MESSAGE, message});


export const login = (email, password, rememberMe, captcha) => (dispatch) => {

    dispatch(setStatus(statuses.INPROGRESS));

    axios.post('auth/login', {
        email: email,
        password: password,
        rememberMe: rememberMe
    }).then(res => {
       if(res.data.resultCode === 0){
           dispatch(setStatus(statuses.SUCCESS));
           dispatch(setIsAuth(true));
           dispatch(me());

       } else {
           dispatch(setStatus(statuses.ERROR));
           dispatch(setMessage(res.data.messages[0]));

       }
    });

}

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_STATUS: {
            return  {
                ...state,
                status: action.status,
            }
        }
        case SET_MESSAGE: {
            return  {
                ...state,
                message: action.message,
            }
        }
        default: {
            return state
        }
    }
};

export default loginReducer
