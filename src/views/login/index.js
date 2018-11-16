import React, {Component} from 'react';
import LogIN from './login'
import Register from './register'
import Forget from './forget'
import "./index.css"

class Login extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let visitor = this.props.location.search;
    if(visitor){
      visitor = visitor.split('=')[1];
    }
    this.setState({visitor:visitor});
  }
  condition() {
    const flag = this.state.flag
    let temp = null
    switch (flag) {
      case "register":
        temp = <Register></Register>
        break;
      case "forget":
        temp =  <Forget></Forget>
        break;
      default:
        temp = <LogIN></LogIN>
    }
    return temp
  }
  render() {
    return (
      <div id='login'>
        <div id='login-bk'>
          {this.condition()}
        </div>
      </div>
    );
  }
}

export default Login;
