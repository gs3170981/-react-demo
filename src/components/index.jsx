import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { $getTimeStore } from 'common/js/methods.js'
// 公用组件
import Tab from 'base/tab/index.jsx'
import SlidePageRouter from 'base/slide-page/index.jsx'
// 业务组件
import TakeOut from './takeOut/index.jsx'
import My from './my/index.jsx'
import Login from './login/index.jsx'
import TakeOutSeach from './takeOut/seach/index.jsx'
import TakeOutDet from './takeOut/det/index.jsx'

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
          }, {
            id: 'my',
            name: '我的',
            components: My
          }
        ],
        itemSelect: 'food',
        itemClick: (item, arr) => {
          // 如果点击my且未登录则跳转登录页
          console.log($getTimeStore('user'))
          if (item.id === 'my' && !$getTimeStore('user').name) {
            this.props.history.push('/login')
            return false
          }
        }
      }
    }
    this._slidePage = {
      'normal': {
      }
    }
  }
  render () {
    return (
      <div className='App'>
        <Tab type={ this._tab }></Tab>
        <SlidePageRouter type={ this._slidePage }>
          <Route path="/login" component={ Login } />
          <Route path="/takeOutSeach" component={ TakeOutSeach } />
          <Route path="/takeOutDet/:val" component={ TakeOutDet } />
        </SlidePageRouter>
      </div>
    )
  }
}
export default withRouter(App)