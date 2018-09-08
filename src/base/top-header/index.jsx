import React, { Component } from 'react'
import { Input } from 'antd'
import { Link } from "react-router-dom"

class Top extends Component {
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
   * @param { String } left 'fa-angle-left'
   * @param { String } right  'fa-angle-left'
   * @param { String } title  '首页'
   */
  normal () {
    return (
      <header className="Top-normal">
        { this.state.left && <Link to={ this.state.left.to } className={ `left fa-fw fa ${ this.state.left.icon }` }></Link> }
        <p className={ `title` }>{ this.state.title }</p>
        { this.state.right && <Link to={ this.state.right.to } className={ `right fa-fw fa ${ this.state.right.icon }` }></Link> }
      </header>
    )
  }
  /**
   * @param { String } left 'fa-angle-left'
   * @param { Function } call 'val => {}'
   */
  seach1 () {
    return (
      <header className="Top-seach1">
        <Link to={  this.state.left.to } className={ `left fa-fw fa ${ this.state.left.icon }` }></Link>
        <Input.Search
          placeholder="input search text"
          onSearch={ value => this.state.call(value) }
          className="input"
        />
      </header>
    )
  }
    /**
   * @param { String } to '/takeOutSeach'
   */
  seach2 () {
    return (
      <header className="Top-seach2">
        <Link className="link" to={ this.state.to }>
          <Input.Search
            readOnly
            placeholder="click this seach"
            className="input"
          />
        </Link>
      </header>
    )
  }
  render () {
    return this[this.key] && this[this.key]()
  }
}
export default Top