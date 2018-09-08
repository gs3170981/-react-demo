import React, { Component } from 'react'
import { withRouter } from'react-router'
import { Button } from 'antd'

class My extends Component {
  constructor (props) {
		super()
    require('./css.less')
    this.actions = {
      exit: () => {
        window._STORE.dispatch({
            type: 'user',
            param: {
                name: ''
            }
        })
        this.props.type.itemSelect = 'food'
        this.props.history.push('/login')
      }
    }
  }
  render () {
    return (
      <div className='My'>
        <Button type="primary" onClick={ this.actions.exit }>退出登录</Button>
      </div>
    )
  }
}
export default withRouter(My)