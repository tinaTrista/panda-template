import React from 'react';
import ReactDOM from 'react-dom'
import './styles/index.scss';
import App from './views/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import Login from './views/Login/index'

ReactDOM.render((
  <BrowserRouter>
    <div id='app'>
      <Route path="/app"  component={App}/>
      <Route path="/login" exact component={Login}/>
    </div>
  </BrowserRouter>
    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
