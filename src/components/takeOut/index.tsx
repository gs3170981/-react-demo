import * as React from 'react';
import { Link } from "react-router-dom"
import Top from 'base/top-header/index'
import Scroll from 'base/better-scroll/index'

interface Props extends React.Props<any> {
  type: object
}

class TakeOut extends React.Component<Props, any> {
  constructor (props: any) {
    super(props)
    // console.log(this.props.router)
    require('./css.less')
    this.state = {
      list: [],
      '_Top': {
        'seach2': {
          to: '/takeOutSeach'
        }
      },
      '_Scroll': {
        'list': {
          id: 'takeOut-list',
          click: true
        }
      }
    }
  }
  public componentWillMount () {
    window.API['takeOut-getList']((res: any) => {
      this.setState({
        list: res.msg.data
      })
    })
  }
  public render () {
    return (
      <div className="takeOut">
        <Top type={ this.state._Top } />
        <Scroll type={ this.state._Scroll }>
          {
            !this.state.list[0] ?
            <h1>数据获取中...</h1> :
            this.state.list.map((obj: any, i: number) => (
              <li key={ i }  className="item">
                <Link to={ `/takeOutDet/${ obj.a }` }>{ obj.a }</Link>
              </li>
            ))
          }
        </Scroll>
      </div>
    )
  }
}
export default TakeOut