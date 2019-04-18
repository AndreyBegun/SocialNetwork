import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import NewsPage from "./Components/News/NewsPage";
import MusicPage from "./Components/Music/MusicPage";
import SettingsPage from "./Components/Settings/SettingsPage";
import SideBar from "./Components/SideBar/SideBar";
import CatalogPageContainer from "./Components/Dialogs/DialogPageContaier";
import ProfilePageContainer from "./Components/Profile/ProfilePageContaier";
import FriendsContainer from "./Components/Friends/FriendsContainer";

import store from "./index";
import {Provider} from "react-redux";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = (props) => {

    return (
        <Provider store={store}>

        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <div className='content-wrapper'>
                    <SideBar/>
                    <Route exact path='/' component={ProfilePageContainer}/>
                    <Route path='/dialogs' component={CatalogPageContainer}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                    <Route path='/news' render={() => <NewsPage/>}/>
                    <Route path='/music' render={() => <MusicPage/>}/>
                    <Route path='/settings' render={() => <SettingsPage/>}/>
                    <Route path='/friends' render={() => <FriendsContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
        </Provider>

    );
}


export default App;
