import React, {Component} from 'react';
import {Menu, Icon} from 'antd'
const menuConfig = require('../../constant.js').siderbar
class Left extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match)
    this.state = {
      collapsed: true
    }
  }
  render() {
    console.log(menuConfig)
    return (
      <div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
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

export default Left;
