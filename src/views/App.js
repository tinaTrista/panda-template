import React from 'react';
import {BrowserRouter,Route} from "react-router-dom"
import Dashboard from './Dashboard/index'
import Apple from './Apple/index'
import About from './About/index'
import Table from './Table/index'
import Left from './components/Left'
import Head from './components/Head/index'


class App extends React.Component {

  isLogin() {
    if (this.props.location.pathname !== '/login'){
      return (
        <div>
        <div className="app-header-nav"><Head> </Head></div>
        <div className="app-sidebar"><Left> </Left></div>
        </div>
      )
    }
  }
  componentDidMount() {
  }
  componentWillUpdate() {

  }
  componentDIdUpdate() {

  }
  render() {
    return (
      <div className="app-layout">
        <div className="app-header-nav"><Head> </Head></div>
        <div className="app-sidebar"><Left> </Left></div>
        <BrowserRouter>
        <div className="app-content">
              <Route path="/app/dashboard" exact component={Dashboard}/>
              <Route path="/app/table" exact component={Table}/>
              <Route path="/app/about" exact component={About}/>
              <Route path="/app/apple" exact component={Apple}/>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App
