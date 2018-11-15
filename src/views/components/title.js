
import React, {Component} from 'react';
class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1 style={{width:'100%',height:'100px',backgroundColor:'#fff', lineHeight:'100px',padding:'0px 20px'}}>
        {this.props.name ? this.props.name: '未知'}
      </h1>
    );
  }
}

export default Title;
