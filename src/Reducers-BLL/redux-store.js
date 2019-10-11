import DialogsReducer from './DialogsReducer';
import ProfileReducer from './ProfileReducer';
import FriendsReducer from './FriendsReducer';
import loginReducer from './LoginReducer';
import AuthReducer from './AuthReducer';
import UsersReducer from './UsersReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


const reducer = combineReducers({
    dialogPage: DialogsReducer,
    profilePage: ProfileReducer,
    friends: FriendsReducer,
    login: loginReducer,
    auth: AuthReducer, 
    usersPage: UsersReducer,
    form: formReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

 window.store = store; //для обращения к стору в консоли

export default store;