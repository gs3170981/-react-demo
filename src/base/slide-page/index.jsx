import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Switch, withRouter } from 'react-router-dom'

export default withRouter(class SlidePageRouter extends Component {
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
   */
  normal () {
    return (
      <TransitionGroup>
        <CSSTransition key={this.props.location.pathname} classNames="SlidePageRouter-normal" timeout={ 300 }>
          <Switch location={this.props.location}>
            { this.props.children }
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }
  render () {
    return this[this.key] && this[this.key]()
  }
})
export class SlidePage extends Component {
  constructor (props) {
    super()
    if (!props) {
      return
    }
    require ('./css.less')
    this.key = Object.keys(props.type)[0]
    this.state = props.type[this.key]
  }
  normal () {
    return (
      <aside className={ `SlidePage-normal ${ this.props.className }` }>
        { this.props.children }
      </aside>
    )
  }
  render () {
    return this[this.key] && this[this.key]()
  }
}