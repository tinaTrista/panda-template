import React, {Component} from 'react';
import {BrowserRouter, Route, Link, withRouter} from "react-router-dom"
import Left from './components/Left/index'
import Head from './components/Head/index'
import Router from './Router'
// const Table = asyncComponent(() => import('./Table')) //雷达图组件

const App = () => (
  <BrowserRouter>
  <div className="app-layout">
      <div className="app-header-nav"><Head></Head></div>
      <div className="app-sidebar"><Left></Left></div>
      <div className="app-content">
         <Router />
      </div>
  </div>
 </BrowserRouter>
  )

export default withRouter(App);
// {routerConfig.forEach(function(item,index){
//   return  <Route path={item.path} exact component={Table}/>
// })}  <Route path="/*" exact component={Dashboard}/>
