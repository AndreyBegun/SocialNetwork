
import {getAuthUserData, setIsAuth} from "./AuthReducer";
import { authApi } from '../DAL/api';


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

    authApi.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(statuses.SUCCESS));
                dispatch(setIsAuth(true));
                dispatch(getAuthUserData());

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
