import * as React from 'react';
import { withRouter } from'react-router'
import { Button } from 'antd'

interface Props extends React.Props<any> {
  type: any,
  history: any
}

class My extends React.Component<Props, any> {
  constructor (props: any) {
		super(props)
    require('./css.less')
    this['methods'] = {
      exit: () => {
        window['_STORE'].dispatch({
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
  public render () {
    return (
      <div className='My'>
        <Button type="primary" onClick={ this['methods'].exit }>退出登录</Button>
      </div>
    )
  }
}
export default withRouter(My)