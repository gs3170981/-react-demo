import * as React from 'react';

// 公用组件
import { SlidePage } from 'base/slide-page/index'
import Top from 'base/top-header/index'
import Scroll from 'base/better-scroll/index'

interface Props extends React.Props<any> {
}

class TakeOutDet extends React.Component<Props, any> {
  constructor (props: any) {
		super(props)
    require('./css.less')
    this.state = {
      '_SlidePage': {
        'normal': {}
      },
      '_Top': {
        'normal': {
          left: {
            icon: 'fa-angle-left',
            to: '/'
          },
          title: props.match.params.val
        }
      },
      '_Scroll': {
        'normal': {
          id: 'takeOut-det'
        }
      }
    }
  }
  public render () {
    return (
      <SlidePage type={ this.state._SlidePage } className="TakeOutDet">
        <Top type={ this.state._Top } />
        <Scroll type={ this.state._Scroll }>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
        </Scroll>
      </SlidePage>
    )
  }
}
export default TakeOutDet