
import React, {Component} from 'react';
import {Avatar} from 'antd'
import './index.css'
class Head extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='header'>
        <img className="header-logo" src={require('../../../assets/img/logo.png')}/>
        <div className="header-avatar">
          <Avatar style={{backgroundColor: '#87d068'}} icon="user" size={35} />
          <span>{this.props.userName? this.props.userName:'mzcc'}</span>
        </div>
      </div>
    );
  }
}

export default Head;
