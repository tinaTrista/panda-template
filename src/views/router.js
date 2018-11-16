import React, {Component} from 'react';

import {BrowserRouter, Route, Link} from "react-router-dom";
import Dashboard from './Dashboard/index'
import About from './About/index'
import Login from './login/index'
import Table from './Table/index'
import asyncComponent from '../asyncComponent'
const routerConfig = require('../constant').siderbar
// const Table = asyncComponent(() => import('./Table')) //雷达图组件

const Router = () => (
  <BrowserRouter>
    <div id='app'>
      <Route path="/dashboard" exact component={Dashboard}/>
      <Route path="/table" exact component={Table}/>
      <Route path="/about" exact component={About}/>
      <Route path="/login" exact component={Login}/>
    </div>
  </BrowserRouter>
  )

export default Router;
// {routerConfig.forEach(function(item,index){
//   return  <Route path={item.path} exact component={Table}/>
// })}  <Route path="/*" exact component={Dashboard}/>
