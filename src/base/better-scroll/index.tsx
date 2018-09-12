import * as React from 'react';

import BScroll from 'better-scroll'

import { $id } from 'common/js/methods.ts'

interface Props extends React.Props<any> {
  type: any
}

class Scroll extends React.Component<Props, any> {
  constructor (props: any) {
    super(props)
    require ('./css.less')
    const key: string = Object.keys(this.props.type)[0]
    this.state = {
      'key': key,
      'data': this.props.type[key]
    }
  }
  /**
   * @param { String } id 'takeOut-det'
   * @param { Boolean } scrollX false
   * @param { Boolean } scrollY  true
   * @param { Boolean } click  true
   * ......
   * http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html
   */
  public list (
    state: object = {
      id: undefined,
      click: true
  }) {
    return (
      <section id={ state['id'] }>
        <ul>
          { this.props.children }
        </ul>
      </section>
    )
  }
  /**
   * @param { String } id 'takeOut-det'
   * @param { Boolean } scrollX false
   * @param { Boolean } scrollY  true
   * @param { Boolean } click  true
   * ......
   * http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html
   */
  public normal (
    state: object = {
      id: undefined,
      click: true
  }) {
    // let dom = $id(this.state.id)
    // dom && setTimeout(() => {
    //   this.scroll = new BScroll($id(this.state.id), this.state)
    // }, 20)
    return (
      <section id={ state['id'] }>
        <div>
          { this.props.children }
        </div>
      </section>
    )
  }
  public render () {
    return this[this.state['key']] && this[this.state['key']](this.state['data'])
  }
  public componentDidMount () {
    let dom: any = $id(this.state.data.id)
    if (!dom) {
      return false
    }
    setTimeout(() => {
      new BScroll(dom, this.state.data)
      // const scroll = new BScroll(dom, this.state)
    }, 20)
    return true
  }
}
export default Scroll