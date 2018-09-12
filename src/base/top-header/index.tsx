import * as React from 'react';
import { Input } from 'antd'
import { Link } from "react-router-dom"

interface Props extends React.Props<any> {
  type: any
}

class Top extends React.Component<Props, any> {
  constructor (props: any) {
    super(props)
    require ('./css.less')
    const key = Object.keys(this.props.type)[0]
    this.state = {
      'key': key,
      'data': this.props.type[key]
    }
  }
  /**
   * @param { String } left 'fa-angle-left'
   * @param { String } right  'fa-angle-left'
   * @param { String } title  '首页'
   */
  public normal (state: any = {
    left: {
      icon: 'fa-angle-left',
      to: '/'
    },
    right: {
      icon: '',
      to: '/'
    },
    title: ''
  }) {
    return (
      <header className="Top-normal">
        { state.left && <Link to={ state.left.to } className={ `left fa-fw fa ${ state.left.icon }` } /> }
        <p className={ `title` }>{ state.title }</p>
        { state.right && <Link to={ state.right.to } className={ `right fa-fw fa ${ state.right.icon }` } /> }
      </header>
    )
  }
  /**
   * @param { String } left 'fa-angle-left'
   * @param { Function } call 'val => {}'
   */
  public seach1 (state: any = {
    left: {
      to: '/',
      icon: 'fa-angle-left'
    },
    call: (val: any) => (console.log(val))
  }) {
    return (
      <header className="Top-seach1">
        <Link to={ state.left.to } className={ `left fa-fw fa ${ state.left.icon }` } />
        <Input.Search
          placeholder="input search text"
          onSearch={ state.call }
          className="input"
        />
      </header>
    )
  }
  /**
   * @param { String } to '/takeOutSeach'
   */
  public seach2 (state: any = {
    left: {
      to: '/',
      icon: 'fa-angle-left'
    }
  }) {
    return (
      <header className="Top-seach2">
        <Link className="link" to={ state.to }>
          <Input.Search
            readOnly={ true }
            placeholder="click this seach"
            className="input"
          />
        </Link>
      </header>
    )
  }
  public render () {
    return this[this.state['key']] && this[this.state['key']](this.state['data'])
  }
}
export default Top