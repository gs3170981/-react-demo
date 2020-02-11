import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';

import routeConfig  from './router/route.js';
import 'api/config.js'

import'antd/lib/notification/style/css' // 全局样式在index.less之前载入
import'antd/lib/input/style/css'

import 'common/style/index.less';
import 'common/js/adaption.js';
import registerServiceWorker from './registerServiceWorker';

// import { createStore, applyMiddleware } from 'redux'
import 'store/index.js' // _STORE 为全局redux
import { Provider } from 'react-redux'
// test
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
    <Provider store = { window._STORE }>
        <Router routes={ routeConfig } history={ hashHistory } />
    </Provider>,
    document.getElementById('root'))
registerServiceWorker();
