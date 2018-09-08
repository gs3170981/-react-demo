import React, { Component } from 'react'
// 公用组件
import { SlidePage } from 'base/slide-page/index.jsx'
import Top from 'base/top-header/index.jsx'

class TakeOutSeach extends Component {
  constructor () {
		super()
    require('./css.less')
    this._SlidePage = {
      'normal': {}
    }
    this._Top  = {
			'seach1': {
        left: {
          icon: 'fa-angle-left',
          to: '/'
        },
        call: val => {
          console.log(val)
        }
      }
    }
  }
  render () {
    return (
      <SlidePage type={ this._SlidePage } className="TakeOutSeach">
        <Top type={ this._Top }></Top>
        <p className="content">Hello World!</p>
      </SlidePage>
    )
  }
}
export default TakeOutSeach