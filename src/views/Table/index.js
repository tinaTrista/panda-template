import React, {Component} from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppWrapper from '../AppWrapper'
import Title from '../components/title'
import { Table , Card} from 'antd';

import asyncComponent from '../../asyncComponent'
import columns from './columns'
import '../../mock'


class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'Table',
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      dataSource: []
    }
  }
  onSelectChange() {
  }
  componentWillMount() {
    // fetch data
    axios.post('/react/table/list').then(res=>{
      this.setState({
        dataSource: res.data.data
      })
    })
  }
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div className="dashboard">
        <Title name={this.state.name}></Title>
        <Card>
          <Table rowSelection={rowSelection} dataSource={this.state.dataSource} columns={columns} />
        </Card>
      </div>
    );
  }
}

export default AppWrapper(TablePage);
