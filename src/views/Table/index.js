import React, {Component} from 'react';
import axios from 'axios'
import { Table ,Tag, Divider, Message} from 'antd';
import Title from '../components/title'
import Left from '../components/Left/index'
import Head from '../components/Head/index'
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
      <a href="javascript:;" onClick={(e)=>handleDel(e, record)}>Delete</a>
    </span>
  ),
}];
function handleDel(e, record) {
//  console.log(e,record)
  axios.post('/react/table/delete', record).then(res=>{
    Message.error(res.data.msg)
  })
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
        dataSource: res.data.data,
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
      <div className="content">
        <Head></Head>
        <Left path={this.props.location.pathname}></Left>
        <div className="app-right">
          <Title name={this.state.name}></Title>
          <Table className="table" rowSelection={rowSelection} dataSource={this.state.dataSource} columns={columns} />
        </div>
      </div>
    );
  }
}

export default TablePage;
