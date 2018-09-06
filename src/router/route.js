// import App from 'components/index.jsx';
// import Login from 'components/login/index.jsx';
// import TakeOut from 'components/takeOut/index.jsx';

const PATH = (path) => (require('components/' + path +'.jsx').default)

export default [{
    path: '/',
    component: PATH('index'),
    // indexRoute: { // 如果无嵌入{ this.props.children }时，则默认展示组件
    //     component: App
    // },
    childRoutes: [
        {
            path: 'login',
            component: PATH('login/index')
        }, {
            path: 'takeOutSeach',
            component: PATH('takeOut/seach/index')
        }, {
            path: 'takeOutDet/:val',
            component: PATH('takeOut/det/index')
        }
    ]
}]
// export default [{
//     path: '/',
//     component: App,
//     indexRoute: { // 展示默认页
//         component: Dashboard
//     },
//     childRoutes: [{
//             path: 'about',
//             component: About
//         },
//         {
//             path: 'inbox',
//             component: Inbox,
//             childRoutes: [{
//                     path: '/messages/:id',
//                     component: Message
//                 },
//                 {
//                     path: 'messages/:id',
//                     onEnter: function (nextState, replaceState) {
//                         replaceState(null, '/messages/' + nextState.params.id)
//                     }
//                 }
//             ]
//         }
//     ]
// }]
