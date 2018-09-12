import * as React from 'react';
// 公用组件
import { SlidePage } from 'base/slide-page/index'
import Top from 'base/top-header/index'

interface Props extends React.Props<any> {
}

class TakeOutSeach extends React.Component<Props, any> {
  constructor (props: any) {
		super(props)
    require('./css.less')
    this.state = {
      '_SlidePage': {
        'normal': {}
      },
      '_Top': {
        'seach1': {
          left: {
            icon: 'fa-angle-left',
            to: '/'
          },
          call: (val: any) => {
            console.log(val)
          }
        }
      }
    }
  }
  public render () {
    return (
      <SlidePage type={ this.state._SlidePage } className="TakeOutSeach">
        <Top type={ this.state._Top } />
        <p className="content">Hello World!</p>
      </SlidePage>
    )
  }
}
export default TakeOutSeach