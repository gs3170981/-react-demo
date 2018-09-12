import * as React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Switch, withRouter } from 'react-router-dom'

interface Props extends React.Props<any> {
  type: any,
  className: string
}

export default withRouter(class SlidePageRouter extends React.Component<Props, any> {
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
   */
  public normal () {
    return (
      <TransitionGroup>
        <CSSTransition key={this.props['location'].pathname} classNames="SlidePageRouter-normal" timeout={ 300 }>
          <Switch location={this.props['location']}>
            { this.props.children }
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }
  public render () {
    return this[this.state['key']] && this[this.state['key']](this.state['data'])
  }
})
export class SlidePage extends React.Component<Props, any> {
  constructor (props: any) {
    super(props)
    if (!props) {
      return
    }
    require ('./css.less')
    const key: string = Object.keys(this.props.type)[0]
    this.state = {
      'key': key,
      'data': this.props.type[key]
    }
  }
  public normal () {
    return (
      <aside className={ `SlidePage-normal ${ this.props.className }` }>
        { this.props.children }
      </aside>
    )
  }
  public render () {
    return this[this.state['key']] && this[this.state['key']](this.state['data'])
  }
}