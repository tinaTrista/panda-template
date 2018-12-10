import React, {Component} from 'react';
import axios from 'axios'
import AppWrapper from '../AppWrapper'
import { Table ,Tag, Divider} from 'antd';

import '../../mock'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;" onClick={(e)=>handleDel(e)}>Delete</a>
    </span>
  ),
}];
function handleDel(e) {
  console.log(e)
}
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
          <Table rowSelection={rowSelection} dataSource={this.state.dataSource} columns={columns} />
      </div>
    );
  }
}

export default AppWrapper(TablePage, 'Table');
