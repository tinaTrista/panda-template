import React, {Component} from 'react';
import Left from '../components/Left/index'
import Head from '../components/Head/index'
import {BrowserRouter, Route, Link} from "react-router-dom";
import Dashboard from './Dashboard/index'
import About from './About/index'
import Login from './login/index'


const Router = () => (
  <BrowserRouter>
    <div id='app'>
      <Route path="/dashboard" exact component={Dashboard}/>
      <Route path="/about" exact component={About}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/*" exact component={Dashboard}/>
    </div>
  </BrowserRouter>
  )

export default Router;
