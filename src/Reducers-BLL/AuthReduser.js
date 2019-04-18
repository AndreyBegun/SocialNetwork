import axios from "../dal/axios-instance";

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

export const setIsAuth = (value) => ({type: SET_IS_AUTH, value});
export const setUserInfo = (userId, userName) => ({type: SET_USER_INFO, userId, userName});

export const me = () => (dispatch) => {

    axios.get('auth/me')
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsAuth(true))
                dispatch(setUserInfo(res.data.data.userId, res.data.data.login))
            }
        });

};

export const logOut = () => (dispatch) => {


    axios.post('auth/logout')
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsAuth(true))
                dispatch(setUserInfo(null, null))
            }
        });

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

        default: {
            return state
        }
    }
};

export default AuthReducer
