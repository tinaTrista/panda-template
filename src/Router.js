import React from 'react'
import { Route ,BrowserRouter} from 'react-router-dom'
import App from './App'
import Login from './views/Login/index'
import Dashboard from './views/Dashboard/index'
import Apple from './views/Apple/index'
import About from './views/About/index'
import Table from './views/Table/index'
class ROUTER extends React.Component{
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
                <BrowserRouter>
                  <App>
                  <Route exact path="/" component={Dashboard}/>
                  <Route path="/dashboard" exact component={Dashboard}/>
                  <Route path="/login" exact component={Login}/>
                  <Route path="/apple" exact component={Apple}/>
                  <Route path="/about" exact component={About}/>
                  <Route path="/table" exact component={Table}/>
                  </App>
                </BrowserRouter>
            </div>
        )
    }
}
export default ROUTER
