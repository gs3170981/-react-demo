import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import 'common/js/adaption.ts'; // rem 自适应
import 'store/index.ts' // redux _STORE
import 'api/config.ts' // ajax API

import'antd/lib/notification/style/css' // 引入样式得在全局样式之前引入
import'antd/lib/input/style/css'
import 'common/style/index.less'; // 全局样式

import App from './components/index'; // 业务组件

declare global { // 暴露全局的自定义属性
  interface Window {
      API: any,
      _STORE: any
  }
}

ReactDOM.render(
  <HashRouter>
      <Route path="/" component={ App } />
  </HashRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
