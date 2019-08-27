
import { authApi } from "../DAL/api";

const SET_IS_AUTH = 'App/AUTH/SET_IS_AUTH';
const SET_USER_INFO = 'App/AUTH/SET_USER_INFO';

let initialState = {
    isAuth: false,
    userInfo: {
        userId: null,
        userName: null,
        avatarUrl: ''
    }
}

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_IS_AUTH: {
            return {
                ...state,
                isAuth: action.value,
            }
        }
        case SET_USER_INFO: {
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userId: action.userId,
                    userName: action.userName
                }
            }
        }

        default: return state;
        
    }
};

export const setIsAuth = (value) => ({ type: SET_IS_AUTH, value });
export const setUserInfo = (userId, userName) => ({ type: SET_USER_INFO, userId, userName });

export const getAuthUserData = () => (dispatch) => {
    authApi.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {userId, login } = res.data.data
                dispatch(setIsAuth(true))
                dispatch(setUserInfo(userId, login))
            }
        });
};

export const logOut = () => (dispatch) => {
    authApi.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsAuth(false))
                dispatch(setUserInfo(null, null))
            }
        });
}

export default AuthReducer
