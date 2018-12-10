import React from 'react'
import echarts from 'echarts/lib/echarts' //必须
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/candlestick'

export default class Candlestick extends React.Component {

  constructor(props) {
    super(props)
    this.initCandlestick = this.initCandlestick.bind(this)
  }

  initCandlestick() {
    const { option={} } = this.props //外部传入的data数据
    let myChart = echarts.init(this.ID) //初始化echarts

    //设置options
    myChart.setOption(option)
    window.onresize = function() {
      myChart.resize()
    }
  }

  componentDidMount() {
    this.initCandlestick()
  }

  componentDidUpdate() {
    this.initCandlestick()
  }

  render() {
    const { width="100%", height = '200px' } = this.props
    return <div ref={ID => this.ID = ID} style={{width, height}}></div>
  }
}
