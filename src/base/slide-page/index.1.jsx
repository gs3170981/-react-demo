import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
// import { TransitionGroup, CSSTransition } from "react-transition-group"

// import Transition from 'react-transition-group/Transition'
import { withRouter } from'react-router'
// import { setTimeout } from 'timers';

class SlidePage extends Component {
  constructor (props) {
    super()
    if (!props) {
      return
    }
    require ('./css.less')
    this.key = Object.keys(props.type)[0]
    this.state = props.type[this.key]
    this.state['id'] = new Date().getTime()
    this.state['active'] = true
    // props.router.setRouteLeaveHook(
    //   props.routes[1],
    //   this.routerLeaveInformation.bind(this)
    // )
  }
  shouldComponentUpdate () {
    return this.props.location.action === "POP"
  }
  routerLeaveInformation () {
    const dom = document.getElementById(this.state.id)
    dom.classList.remove('SlidePage-normal-active')

    // this.props.router.setRouteLeaveHook(
    //   this.props.routes[1],
    //   () => (true)
    // )
    
    setTimeout(() => {
      // this.setState({
      //   'active': false
      // })
      // console.log(this)
      // this.props.type.normal.activeChange()
      // this.state.active = false
    }, 300)
    // return false
    return true
    // return 'You have unsaved information, are you sure you want to leave this page?';
  }
  /**
   * @param { Array } item '[{id,name},...]'
   * @param { Function } itemClick  '{}'
   */
  normal () {
    console.log(123456)
    // setTimeout(() => {
    //   this.setState({
    //     'class': 'SlidePage-normal-active'
    //   })
      // this.state._active = 
      // this.state['class'] = this.state.active ? 'SlidePage-normal-active' : ''
    // }, 0)
    // setTimeout(() => {
    //   this.setState({
    //     'class': ''
    //   })
    // }, 500)
    // console.log(this.props.history)
    return (
      // <CSSTransitionGroup
      //   transitionName='left'
      //   transitionEnter={true}
      //   transitionLeave={true}
      //   transitionEnterTimeout={400}
      //   transitionLeaveTimeout={400}
      // >
      //   <div key={this.props.router.location.pathname}>
      //     { this.props.children }
      //   </div>
      // </CSSTransitionGroup>
    
      <aside id={this.state.id} className={ `SlidePage-normal ${ this.props.className }` }>
        { this.props.children }
      </aside>
      // <TransitionGroup>
      //   <CSSTransition
      //     //将要显示动画的组件外面套上CSSTransition标签
      //     timeout={1000}
      //     className={ `SlidePage-normal ${ this.props.className }` }
      //     classNames="fade" //对应CSS里面的'fade-'前缀，可以换成别的，对应的CSS前缀也要换
      //     unmountOnExit //添加这个属性之后当组件消失时将移除组件的DOM
      //     onEntered={el => {
      //       //这个属性可以给动画播放完毕后的组件执行一次js函数
      //       el.style.color = "blue";
      //     }}
      //     appear={true} //添加这个属性使组件第一次出现的时候（即页面刚加载时）也使用动画，对应css中的fade-appear和fade-appear-active样式
      //     key={this.props.router.location.pathname}
      //   >
      //     { this.props.children }
      //   </CSSTransition>
      // </TransitionGroup>
      
      // <Transition className={ `SlidePage-normal ${ this.props.className }` } in={true} timeout={1000}>
      //   { this.props.children }
      // </Transition>
      // <ReactCSSTransitionGroup transitionName="student"> 
      //   <div key={ this.props.router.location.pathname }>{ this.props.children }</div>
      // </ReactCSSTransitionGroup>

      // <TransitionGroup>
      //   <CSSTransition
      //     className="SlidePage-normal"
      //     appear={ true }
      //     classNames="fade"
      //     key={ this.props.router.location.pathname }
      //     timeout={ 800 }>
      //     { this.props.children }
      //   </CSSTransition>
      // </TransitionGroup>

      // <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
      //     { this.props.children }
      // </ReactCSSTransitionGroup>
    )
  }
  render () {
    return this[this.key] && this[this.key]()
  }
  componentDidMount () {
    // this.state.active &&
    setTimeout(() => {
      const dom = document.getElementById(this.state.id)
      dom.classList.add('SlidePage-normal-active')
    }, 20)
  }
  componentWillUnmount () {
    // const dom = document.getElementById(this.state.id)
    // dom.classList.remove('SlidePage-normal-active')
  }
}

export default withRouter(SlidePage)