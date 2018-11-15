import React from 'react'
import Left from './components/Left/index'
import Head from './components/Head/index'
export default function AppWrapper (Component) {
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
        <div className="app-layout">
            <div className="app-header-nav"><Head></Head></div>
            <div className="app-sidebar"><Left></Left></div>
            <div className="app-content">
               <Component {...this.props}></Component>
            </div>
        </div>
      )
    }
  }
}
