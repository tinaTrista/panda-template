import React from 'react'
import echarts from 'echarts/lib/echarts' //必须
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/bar'

export default class Bar extends React.Component {
  // 添加一个类构造函数来初始化状态 this.state
  // 虽然 this.props 由React本身设置以及this.state 具有特殊的含义，但如果需要存储不用于视觉输出的东西，则可以手动向类中添加其他字段。
  // 如果你不在 render() 中使用某些东西，它就不应该在状态中
  constructor(props) {
    super(props)
    this.initPie = this.initPie.bind(this)
  }

  initPie() {
    const { option={} } = this.props //外部传入的data数据
    let myChart = echarts.init(this.ID) //初始化echarts

    //设置options
    myChart.setOption(option)
    window.onresize = function() {
      myChart.resize()
    }
  }
  // 当组件输出到 DOM 后会执行 componentDidMount() 钩子
  componentDidMount() {
    this.initPie()
  }

  componentDidUpdate() {
    this.initPie()
  }

  render() {
    const { width="100%", height="200px"} = this.props
    return <div ref={ID => this.ID = ID} style={{width, height}}></div>
  }
}
