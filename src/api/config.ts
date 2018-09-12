import { notification } from 'antd'
import { GET, POST } from 'common/js/fetch-ajax.ts'

// const FAKE = false // true:假数据 false:真数据

// const URL = 'http://192.168.0.103'
const URL: string = 'http://192.168.191.2'

const CODE_OK: number = 0
const CODE_ERR = (r: any, type?: boolean) => { // 失败的回调
    // type ? message.error('接口查询失败，请联系管理员！<br />请求地址：' + r.url + '<br />' + JSON.stringify(r.data), '温馨提示') : message.error('服务器炸啦，正在抢修中！', '温馨提示')
    // console.error(r.url, r.info)
    // 抛错提示
    notification[type ? 'warning' : 'error']({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    })
    console.error(r)
}
const CODE_IS = (r: any, fn: any) => (r.status === CODE_OK ? fn(r) : CODE_ERR(r, true))

// API中间件，耦合性抽离，进行数据预处理

window['API'] = {
    'takeOut-getList' (fn: any) {
        GET(URL + '/tpadmin/public/index.php/api/user/cplist').then((res: any) => res.json()).then((res: any) => CODE_IS(res, fn)).catch((err: any) => CODE_ERR(err))
    },
    'login' (data: object, fn: any) {
        POST(URL + '/tpadmin/public/index.php/api/user/log', data).then((res: any) => res.json()).then((res: any) => {
            // 这儿可以进行过程控制，避免动业务组件
            (res.status !== CODE_OK || res.msg.msg === '账号不存在或账号错误') ? CODE_ERR(res, true) : fn(res)
        }).catch((err: any) => CODE_ERR(err))
    }
}