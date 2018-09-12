import * as React from 'react';
import { withRouter } from'react-router-dom'
import { Input } from 'antd'

import { $class } from 'common/js/methods.ts';

// 公用组件
import { SlidePage } from 'base/slide-page/index'
import Top from 'base/top-header/index'

interface Props extends React.Props<any> {
    history: any
}

class Login extends React.Component<Props, any> {
  constructor (props: any) {
    super(props)
    require('./css.less')
    // 该模块数据
    this.state = {
        '_SlidePage': {
            'normal': {}
        },
        '_Top': {
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
    }
    // 该模块方法集
    this['methods'] = {
      login: () => {
        let loginInfo = {
          name: $class('user')[0]['value'],
          pass: $class('pass')[0]['value']
        }
        window['API'].login(loginInfo, (res: any) => {
          window['_STORE'].dispatch({
              type: 'user',
              param: loginInfo
          })
          this.props.history.push('/')
        })
      }
    }
  }
  public render () {
    return (
      <SlidePage type={ this.state['_SlidePage'] } className="Login">
        <Top type={ this.state['_Top'] } />
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
          <p onClick={ this['methods'].login }>登录</p>
        </section>
      </SlidePage>
    )
  }
}
export default withRouter(Login)