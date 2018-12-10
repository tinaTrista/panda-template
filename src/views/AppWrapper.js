import React from 'react'
import Left from './components/Left'
import Head from './components/Head/index'
import Title from './components/title'
import {Card} from 'antd';
export default function AppWrapper (Component, name) {
  return class WarpComponent extends React.Component {
    constructor (props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange (value) {
      console.log(value)
    }

    render () {
      return (
              <Card>
                 <Component {...this.props}></Component>
              </Card>
      )
    }
  }
}
