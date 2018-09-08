import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, hashHistory } from 'react-router';

// import routeConfig  from './router/route.js';

import { HashRouter, Route } from 'react-router-dom'
import 'api/config.js'

import'antd/lib/notification/style/css' // 全局样式在index.less之前载入
import'antd/lib/input/style/css'

import 'common/style/index.less';
import 'common/js/adaption.js';
import registerServiceWorker from './registerServiceWorker';

// import { createStore, applyMiddleware } from 'redux'
import 'store/index.js' // _STORE 为全局redux

import App from 'components/index.jsx'
// import { Provider } from 'react-redux'

// window._STORE.dispatch({
//     type: 'user',
//     param: {
//         username: '123'
//     }
// })
// window._STORE.dispatch({
//     type: 'order',
//     param: {
//         list: [
//             {
//                 id: '1',
//                 name: 'test',
//                 price: '10.00'
//             }
//         ]
//     }
// })

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={ App } />
    </HashRouter>,
    document.getElementById('root'))
registerServiceWorker();
