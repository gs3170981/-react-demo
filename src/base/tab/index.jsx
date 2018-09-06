import React, { Component } from 'react'
// import { withRouter } from 'react-router'

class Tab extends Component {
  constructor (props) {
    super()
    // console.log(props)
    if (!props) {
      return
    }
    require ('./css.less')
    this.key = Object.keys(props.type)[0]
    this.state = props.type[this.key]
  }
  /**
   * @param { Array } item '[{id,name},...]'
   * @param { Function } itemClick  '{}'
   */
  main () {
    const itemClick = (item, arr) => {
      if (this.state.itemClick(item, arr) === false) { // 如果函数return false则不执行下面
        return // 为了处理特殊情况，如未登陆时，选择“我的”tab页应跳转login页
      }
      this.setState({
        itemSelect: item.id
      })
    }
    return (
      <div className="Tab">
        {
          this.state.item.map(item => (
            <section key={ item.id }
              className="Tab-content"
              className={ this.state.itemSelect === item.id ? 'Tab-content Tab-active' : 'Tab-content' }>
              <item.components type={ this.state } />
            </section>))
        }
        <ul className="Tab-footer">
          {
            this.state.item.map(item => (
              <li key={ item.id }
                className={ this.state.itemSelect === item.id ? 'item-active item' : 'item' }
                onClick={ e => itemClick(item, this.state.item) }>
                { item.name }
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
  /**
   * @param { Function } call 'val => {}'
   */
  // seach1 () {
  //   return (
  //     <input type="text" className="input"  />
  //   )
  // }
  render () {
    return this[this.key] && this[this.key]()
  }
}

// export default withRouter(Tab)
export default Tab