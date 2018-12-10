import React, {
  Component
} from 'react';
import {
  Avatar,Icon,Dropdown,Menu
} from 'antd'
import {withRouter} from "react-router-dom";


class Head extends Component {
  handleLogout = function(e) {
    // console.log(this)
    console.log(this.props.history)
    this.props.history.push('/login');
  }
  handlePassword = function(e) {
    // console.log(this)
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" onClick={(e)=>this.handlePassword(e)}>修改密码</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" onClick={(e)=>this.handleLogout(e)}>登出</a>
        </Menu.Item>
      </Menu>
    );
    return ( <div className = 'app-header' >
      <img className = "header-logo" alt="logo" src = {require('../../../assets/img/logo.png')}/>
      <Dropdown overlay = {menu}>
        <div className = "header-avatar">
          <Avatar style = {{backgroundColor: '#87d068'}} icon = "user" size = {35}/>
          <span> {this.props.userName ? this.props.userName : 'Lisa'} </span>
          <Icon type = "down" />
        </div>
      </Dropdown>
      </div>
    );
  }
}

export default withRouter(Head);
