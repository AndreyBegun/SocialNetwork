import { usersApi, profileApi } from '../DAL/api';

const ADD_MESSAGE_POSTS = "ADD_MESSAGE_POSTS";
const CHANGE_CURRENT_POST_MESSAGE = "CHANGE_CURRENT_POST_MESSAGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialStateForProfiles = {
  currentPostMessValue: "",

  posts: [
    {
      id: 1,
      urlAvaPhoto: "https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg",
      message: "Hi, how are you?",
      likesCount: "12"
    },
    {
      id: 2,
      urlAvaPhoto: "https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg",
      message: "It's my first post",
      likesCount: "23"
    }
  ],
  profiles: {
    photos: {},
    lookingForAJob: '',
    aboutMe: '',
    lookingForAJobDescription: '',
    userId: '',
    fullName: '',
  },
  status: '',

};

const ProfileReducer = (state = initialStateForProfiles, action) => {

  switch (action.type) {
    case ADD_MESSAGE_POSTS:

      let newState = { ...state }

      newState.posts.unshift({
        message: newState.currentPostMessValue,
        urlAvaPhoto: "https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg",
        likesCount: 0
      });
      newState.currentPostMessValue = "";
      return newState;

    case CHANGE_CURRENT_POST_MESSAGE:
      return { ...state, currentPostMessValue: action.postMessage };

    case SET_USER_PROFILE:
      return { ...state, profiles: action.profiles };

    case SET_STATUS:
      return { ...state, status: action.status }

    default:
      return state;
  }
};

export const setUserProfileAC = (profiles) => ({ type: SET_USER_PROFILE, profiles });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUsersProfile = (userId) => (dispatch) => {
  usersApi.getProfile(userId).then(response => {
    dispatch(setUserProfileAC(response.data));
  });
}
export const getStatus = (userId) => (dispatch) => {
  profileApi.getStatus(userId).then(response => {
    dispatch(setStatus(response.data));
  });
}
export const updateStatus = (status) => (dispatch) => {
  profileApi.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
}


export default ProfileReducer;
