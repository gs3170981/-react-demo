import React, { Component } from 'react'
import { Link } from "react-router"

import Top from 'base/top-header/index.jsx'
import Scroll from 'base/better-scroll/index.jsx'

// import { $Promise } from 'common/js/methods.js'

class TakeOut extends Component {
  constructor (props) {
    super()
    // console.log(this.props.router)
    require('./css.less')
    this.state = {
      list: []
    }
		this._Top  = {
			'seach2': {
        to: '/takeOutSeach'
      }
    }
    this._Scroll = {
      'list': {
        id: 'takeOut-list',
        click: true
      }
    }
  }
  componentWillMount () {
    window.API['takeOut-getList'](res => {
      this.setState({
        list: res.msg.data
      })
    })
  }
  render () {
    return (
      <div className="takeOut">
        <Top type={ this._Top }></Top>
        <Scroll type={ this._Scroll }>
          {
            !this.state.list[0] ?
            <h1>数据获取中...</h1> :
            this.state.list.map((obj, i) => (
              <li key={ i }  className="item">
                <Link to={ `/takeOutDet/${ obj.a }` }>{ obj.a }</Link>
              </li>
            ))
          }
        </Scroll>
        { this.props.children }
      </div>
    )
  }
}
export default TakeOut