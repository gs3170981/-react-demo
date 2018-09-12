import * as React from "react"
import { Route } from "react-router-dom"
import { $getTimeStore } from "common/js/methods.ts"

// 公用组件
import Tab from "base/tab/index"
import SlidePageRouter from "base/slide-page/index"
// 业务组件
import My from "components/my/index"
import TakeOut from "components/takeOut/index"
import Login from 'components/login/index'
import TakeOutSeach from 'components/takeOut/seach/index'
import TakeOutDet from 'components/takeOut/det/index'

interface Props extends React.Props<any> {
  history: any
}

class App extends React.Component<Props, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      '_tab': {
        'main': {
          item: [
            {
              id: "food",
              name: "外卖",
              components: TakeOut
            },
            {
              id: "my",
              name: "我的",
              components: My
            }
          ],
          itemClick: (item: any, arr: any) => {
            // 如果点击my且未登录则跳转登录页
            // console.log($getTimeStore('user'))
            if (item.id === "my" && !$getTimeStore("user").name) {
              this.props.history.push("/login")
              return false
            }
            return true
          },
          itemSelect: "food"
        }
      },
      '_slidePage': {
        'normal': {}
      }
    }
  }
  public render() {
    return (
      <div className="App">
        <Tab type={this.state._tab} />
        <SlidePageRouter type={this.state._slidePage}>
          <Route path="/login" component={ Login } />
          <Route path="/takeOutSeach" component={ TakeOutSeach } />
          <Route path="/takeOutDet/:val" component={ TakeOutDet } />
        </SlidePageRouter>
      </div>
    );
  }
}

export default App
