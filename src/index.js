import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, combineReducers, createStore} from "redux";
import DialogsReducer from "./Reducers-BLL/DialogsReducer";
import ProfileReducer from "./Reducers-BLL/ProfileReducer";
import FriendsReducer from "./Components/Friends/FriendsReducer";
import loginReducer from "./Reducers-BLL/LoginReducer";
import thunk from "redux-thunk";
import AuthReducer from "./Reducers-BLL/AuthReduser";


// let initialStateForDialog = {
//     currentDialogMessValue: '',
//     dialogsItem: [
//         {
//             name: 'Dimich',
//             id: '1'
//         },
//         {
//             name: 'Andrey',
//             id: '2'
//         },
//         {
//             name: 'Sveta',
//             id: '3'
//         }
//     ],
//     dialogMessages: [
//         {
//             id: '1',
//             message: 'Hi',
//             urlFoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg'
//         },
//         {
//             id: '2',
//             message: 'how are you?',
//             urlFoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg'
//         },
//         {
//             id: '3',
//             message: 'yo it-camasutra!',
//             urlFoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg'
//         }
//     ]
// }
// let initialStateForPost = {
//     currentPostMessValue: '',
//     posts: [
//         {
//             id: 1,
//             urlAvaPhoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg',
//             message: 'Hi, how are you?',
//             likesCount: '12'
//         },
//         {
//             id: 2,
//             urlAvaPhoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg',
//             message: 'It\'s my first post',
//             likesCount: '23'
//         }
//     ],
// }

// const addMessageDialogsReducer = (state = initialStateForDialog, action) => {
//     let stateCopy
//     switch (action.type) {
//         case 'ADD_MESSAGE_DIALOGS':
//             state.dialogMessages.unshift({
//                 message: action.message,
//                 urlFoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg'
//             });
//             state.currentDialogMessValue = '';
//             return state;
//         default:
//             return state;
//     }
// }
//
// const addMessagePostReducer = (state = initialStateForPost, action) => {
//     switch (action.type) {
//         case 'ADD_MESSAGE_POSTS':
//             state.posts.unshift({
//                 message: action.message,
//                 urlAvaPhoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg',
//                 likesCount: 0,
//             });
//             state.currentPostMessValue = '';
//             return state;
//
//         default:
//             return state;
//     }
// }

// const myStore = {
//     state: {
        // currentDialogMessValue: '',
        // currentPostMessValue: '',
        // posts: [
        //     {
        //         id: 1,
        //         urlAvaPhoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg',
        //         message: 'Hi, how are you?',
        //         likesCount: '12'
        //     },
        //     {
        //         id: 2,
        //         urlAvaPhoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg',
        //         message: 'It\'s my first post',
        //         likesCount: '23'
        //     }
        // ],
        // profiles: {
        //     userName: 'Andruha',
        //     birthDay: '12.08.1984',
        //     city: 'Minsck',
        //     aducation: 'higher',
        //     webSite: 'drunya35@gmail.com'
        // },
        // dialogsItem: [
        //     {
        //         name: 'Dimich',
        //         id: '1'
        //     },
        //     {
        //         name: 'Andrey',
        //         id: '2'
        //     },
        //     {
        //         name: 'Sveta',
        //         id: '3'
        //     }
        // ],
        // dialogMessages: [
        //     {
        //         id: '1',
        //         message: 'Hi',
        //         urlFoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg'
        //     },
        //     {
        //         id: '2',
        //         message: 'how are you?',
        //         urlFoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg'
        //     },
        //     {
        //         id: '3',
        //         message: 'yo it-camasutra!',
        //         urlFoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg'
        //     }
        // ]

        // },

        // dispatch(action) {
        //     switch (action.type) {
                // case 'ADD_MESSAGE_POSTS':
                //     this._state.posts.unshift({
                //         message: action.message,
                //         urlAvaPhoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg',
                //         likesCount: 0,
                //     });
                //     this._state.currentPostMessValue = '';
                //     this._callbacks();
                //     break;
                // case 'ADD_MESSAGE_DIALOGS':
                //     this._state.dialogMessages.unshift({
                //         message: action.message,
                //         urlFoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg'
                //     });
                //     this._state.currentDialogMessValue = '';
                //     this._callbacks();
                //     break;
                // case 'CHANGE_CURRENT_POST_MESSAGE':
                //     this._state.currentPostMessValue = action.postMess;
                //     this._callbacks();
                //     break;
                // case 'CHANGE_CURRENT_DIALOG_MESSAGE':
                //     this._state.currentDialogMessValue = action.dialMess;
                //     this._callbacks();
                //     break;
                // default:
                //     return this._state;
        //     }
        // },
        //
        // getState() {
        //     return this._state;
        // },
        //
        // _callbacks() {
        //     alert('Error');
        // },

        // subscribe(renderAll) {
        //     this._callbacks = renderAll;
        // }
    // }
// }

const superReducer = combineReducers({
    dialogPage: DialogsReducer,
    profilePage: ProfileReducer,
    friends: FriendsReducer,
    login: loginReducer,
    auth: AuthReducer
});

const store = createStore(superReducer, applyMiddleware(thunk));

 window.store = store; //для обращения к стору в консоли

export default store;

store.subscribe( () => {
    refresh();
})
const refresh = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
}
refresh();


serviceWorker.unregister();
