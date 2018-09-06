import React, { Component } from 'react'
import { withRouter } from'react-router'
import { Input } from 'antd'

import { $class } from 'common/js/methods.js';

// 公用组件
import SlidePage from 'base/slide-page/index.jsx'
import Top from 'base/top-header/index.jsx'

class Login extends Component {
  constructor (props) {
		super()
    require('./css.less')
    // 该模块数据
    this.state = {}
    // 组件参数
    this._SlidePage = {
      'normal': {}
    }
    this._Top = {
      'normal': {
        left: {
          icon: 'fa-angle-left',
          to: '/'
        },
        title: '登录',
        right: {
          icon: 'fa-angle-right',
          to: '/'
        }
      }
    }
    // 该模块方法集
    this.actions = {
      login: () => {
        let loginInfo = {
          name: $class('user')[0].value,
          pass: $class('pass')[0].value
        }
        window.API['login'](loginInfo, res => {
          window._STORE.dispatch({
              type: 'user',
              param: loginInfo
          })
          this.props.router.push('/')
        })
      }
    }
  }
  render () {
    return (
      <SlidePage type={ this._SlidePage } className="Login">
        <Top type={ this._Top }></Top>
        <section className="from">
          <Input
            placeholder="input user"
            className="user"
          />
          <br />
          <Input
            placeholder="input pass"
            className="pass"
          />
          <p onClick={ this.actions.login }>登录</p>
        </section>
      </SlidePage>
    )
  }
}
export default withRouter(Login)