import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Menu, Icon} from 'antd'
const menuConfig = require('../../../constant.js').siderbar
class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
  }
  handleClick = (e) => {
    this.props.history.push(e.key);
  }
  render() {
    console.log(this.props.path)
    return (
      <div className="app-sidebar">
        <Menu
          onClick = {this.handleClick}
          defaultOpenKeys={['/dashboard']}
          selectedKeys={[this.props.path]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
        {menuConfig.map(function(item,index){
          return (
          <Menu.Item key={item.path}>
            <Icon type={item.name} />
            <span>{item.name}</span>
          </Menu.Item>)
        })}
        </Menu>
      </div>
  );
  }
}

export default withRouter(Left);
