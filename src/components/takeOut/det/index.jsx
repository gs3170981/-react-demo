import React, { Component } from 'react'

// 公用组件
import SlidePage from 'base/slide-page/index.jsx'
import Top from 'base/top-header/index.jsx'
import Scroll from 'base/better-scroll/index.jsx'

class TakeOutDet extends Component {
  constructor (props) {
		super()
    require('./css.less')
    this._SlidePage = {
      'normal': {}
    }
    this._Top  = {
			'normal': {
        left: {
          icon: 'fa-angle-left',
          to: '/'
        },
        title: props.routeParams.val,
        right: {}
      }
    }
    this._Scroll = {
      'normal': {
        id: 'takeOut-det'
      }
    }
  }
  render () {
    return (
      <SlidePage type={ this._SlidePage } className="TakeOutDet">
        <Top type={ this._Top }></Top>
        <Scroll type={ this._Scroll }>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
        </Scroll>
      </SlidePage>
    )
  }
}
export default TakeOutDet