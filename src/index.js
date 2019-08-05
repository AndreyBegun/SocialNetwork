import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Reducers-BLL/redux-store';


store.subscribe( () => {
    refresh();
})
const refresh = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
}
refresh();


serviceWorker.unregister();
