import React, {Component} from 'react';
import Title from '../components/title'
import Left from '../components/Left/index'
import Head from '../components/Head/index'
import { Card } from 'antd';
import './index.css'
import asyncComponent from '../../asyncComponent'
import { pieOption, barOption, lineOption, scatterOption, mapOption, radarOption, candlestickOption } from './echarts/optionConfig'
import chartConfig from './config/index'

const Chart = asyncComponent(() => import('./echarts/Chart')) //k线图组件

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'dashboard'
    }
  }

  render() {
    let height ="260px"
    return (
      <div className="content">
        <Head></Head>
        <Left path={this.props.location.pathname}></Left>
        <div className="app-right">
          <Title name={this.state.name}></Title>
          <div style={{display:'grid',  gridTemplateColumns: '1fr 1fr 1fr 1fr',gridGap:'10px'}}>
            <Card title="Map chart" style={{gridColumn:'3 / span 2', gridRow:'1 / span 2'}}><Chart option={mapOption}  height={'640px'}/></Card>
            <Card title="Line chart" ><Chart option={lineOption}  height={height}/></Card>
            <Card title="Radar chart" ><Chart option={radarOption} height={height}/></Card>
            <Card title="Pie chart"><Chart option={pieOption}  height={height}/></Card>
            <Card title="Bar chart"><Chart option={barOption}  height={height}/></Card>
            <Card title="Scatter chart"><Chart option={scatterOption}  height={height}/></Card>
            <Card title="Candlestick chart"><Chart option={candlestickOption}  height={height}/></Card>
            <Card title="gauge chart"><Chart option={chartConfig.gauge}  height={height}/></Card>
            <Card title="tree chart"><Chart option={chartConfig.tree}  height={height}/></Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
