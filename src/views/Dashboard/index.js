import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppWrapper from '../AppWrapper'
import Title from '../components/title'
import './index.css'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'dashboard'
    }
  }

  render() {
    return (
      <div className="dashboard">
        <Title name={this.state.name}></Title>
      </div>
    );
  }
}

export default AppWrapper(Dashboard);
