import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Auth from "./Auth"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


let state = {};
let auth = new Auth();
let userName = auth.getProfile().given_name || "user"


window.setState = (changes) => {
  state = Object.assign({}, state, changes);
  ReactDOM.render(
    <Router>
      <App {...state}/>
    </Router>, document.getElementById('root'));
}

/*eslint no-restricted-globals: 0*/
let initialState = {
  name: userName,
  location: location.pathname.replace(/^\/?|\/$/g, ""),
  auth
}

window.setState(initialState);

registerServiceWorker();
