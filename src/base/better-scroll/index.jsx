import React, { Component } from 'react'

import BScroll from 'better-scroll'

import { $id } from 'common/js/methods.js'

class Scroll extends Component {
  constructor (props) {
    super()
    if (!props) {
      return
    }
    require ('./css.less')
    this.key = Object.keys(props.type)[0]
    this.state = props.type[this.key]
  }
  /**
   * @param { Boolean } scrollX false
   * @param { Boolean } scrollY  true
   * @param { Boolean } click  '首页'
   * http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html
   */
  list () {
    setTimeout(() => {
      this.scroll = new BScroll($id(this.state.id), this.state)
    }, 20)
    return (
      <section id={ this.state.id }>
        <ul>
          { this.props.children }
        </ul>
      </section>
    )
  }
  /**
   * @param { Boolean } scrollX false
   * @param { Boolean } scrollY  true
   * @param { Boolean } click  '首页'
   * http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html
   */
  normal () {
    setTimeout(() => {
      this.scroll = new BScroll($id(this.state.id), this.state)
    }, 20)
    return (
      <section id={ this.state.id }>
        <div>
          { this.props.children }
        </div>
      </section>
    )
  }
  render () {
    return this[this.key] && this[this.key]()
  }
}
export default Scroll