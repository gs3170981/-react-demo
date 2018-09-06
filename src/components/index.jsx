import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { $getTimeStore } from 'common/js/methods.js'

// 公用组件
import Tab from 'base/tab/index.jsx'
// 业务组件
import TakeOut from './takeOut/index.jsx'
import My from './my/index.jsx'

class App extends Component {
  constructor (props) {
    super()
		this._tab = {
      'main': {
        item : [
          {
            id: 'food',
            name: '外卖',
            components: TakeOut
            // active: true
          }, {
            id: 'my',
            name: '我的',
            components: My
            // active: false
          }
        ],
        itemSelect: 'food',
        itemClick: (item, arr) => {
          // 如果点击my且未登录则跳转登录页
          console.log($getTimeStore('user'))
          if (item.id === 'my' && !$getTimeStore('user').name) {
            this.props.router.push('/login')
            return false
          }
        }
      }
    }
  }
  // shouldComponentUpdate () {
  //   return (this.props.router.location.action === 'PUSH')
  // }
  render () {
    return (
      <div className='App'>
        <Tab type={ this._tab }></Tab>
        { this.props.children }
      </div>
    )
  }
}
export default App