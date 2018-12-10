import React, {Component} from 'react';
import Title from '../components/title'
import { Card } from 'antd';
import './index.css'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/bar'
import asyncComponent from '../../asyncComponent'
import { pieOption, barOption, lineOption, scatterOption, mapOption, radarOption, candlestickOption } from './optionConfig'
const Pie = asyncComponent(() => import('./echarts/Pie'))  //饼图组件
const Bar= asyncComponent(() => import('./echarts/Bar')) //柱状图组件
const Line = asyncComponent(() => import('./echarts/Line'))  //折线图组件
const Scatter = asyncComponent(() => import('./echarts/Scatter'))  //散点图组件
const Map = asyncComponent(() => import('./echarts/Map'))  //地图组件
const Radar = asyncComponent(() => import('./echarts/Radar')) //雷达图组件
// const CandlestickReact = asyncComponent(() => import('./echarts/Candlestick')) //k线图组件

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
        <div style={{display:'grid',  gridTemplateColumns: '400px 400px auto', gridGap:'10px'}}>
          <Card title="Pie chart"><Pie option={pieOption}  /></Card>
          <Card title="Bar chart"><Bar option={barOption}  /></Card>
          <Card title="Map chart"><Map option={mapOption} /></Card>
          <Card title="Line chart"><Line option={lineOption}  /></Card>
          <Card title="Scatter chart"><Scatter option={scatterOption}  /></Card>
          <Card title="Radar chart"><Radar option={radarOption} /></Card>
        </div>
      </div>
    );
  }
}

export default Dashboard;
