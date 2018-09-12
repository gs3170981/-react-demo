import * as React from 'react';
// import { withRouter } from 'react-router'

interface Props extends React.Props<any> {
  type: any
}

class Tab extends React.Component<Props, any> {
  constructor (props: any) {
    super(props)
    require ('./css.less')
    const key = Object.keys(this.props.type)[0]
    this.state = {
      'key': key,
      'data': this.props.type[key]
    }
  }
  public main (
  /**
   * @param { Array } item [{id, name, components},...]
   * @param { Function } itemClick  () => (true)
   */
    state: any = {
      item: [{
        id: 'food',
        name: '外卖',
        components: undefined
      }, {
        id: 'my',
        name: '我的',
        components: undefined
      }],
      itemClick: () => (true),
      itemSelect: 'food'
  }) {
    const itemClick = (item: any, arr: any) => {
      if (state.itemClick(item, arr) === false) { // 如果函数return false则不执行下面
        return // 为了处理特殊情况，如未登陆时，选择“我的”tab页应跳转login页
      }
      this.setState({
        data: Object.assign({}, state, {
          itemSelect: item.id
        })
      })
    }
    return (
      <div className="Tab">
        {
          state.item.map((item: any) => (
            <section key={ item.id }
                className={ state.itemSelect === item.id ? 'Tab-content Tab-active' : 'Tab-content' }>
                <item.components type={ state } />
              </section>
          ))
        }
        <ul className="Tab-footer">
          {
            state.item.map((item: any) => (
              <li key={ item.id }
                className={ state.itemSelect === item.id ? 'item-active item' : 'item' }
                onClick={ itemClick.bind(this, item, state.item) }>
                { item.name }
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
  public render () {
    return this[this.state.key] && this[this.state.key](this.state.data)
  }
}

export default Tab