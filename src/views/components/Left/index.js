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
    //console.log('click ', e);
    let item = menuConfig[parseInt(e.key)]
    console.log(item)
    this.props.history.push(item.path);
  }
  render() {
    return (
      <div>
        <Menu
          onClick = {this.handleClick}
          defaultSelectedKeys={['1']}
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
