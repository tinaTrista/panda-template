import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Menu, Icon} from 'antd'
const menuConfig = require('../../constant.js').siderbar
class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
  }
  handleClick = (e) => {
    let item = menuConfig[parseInt(e.key)]
    this.props.history.push(item.path);
    console.log(item.path, this.props)
  }
  render() {
    return (
      <div>
        <Menu
          onClick = {this.handleClick}
          defaultSelectedKeys={['0']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
        {menuConfig.map(function(item,index){
          return (
          <Menu.Item key={index}>
            <Icon type={item.type} />
            <span>{item.name}</span>
          </Menu.Item>)
        })}
        </Menu>
      </div>
  );
  }
}

export default withRouter(Left);
