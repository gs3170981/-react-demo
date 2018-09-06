import { combineReducers } from 'redux'
import { createStore } from 'redux'

import { $setlocalStorag } from 'common/js/methods.js'

const PATH = (path) => (require(path +'.js').default)

window._STORE = createStore(combineReducers({
  user: PATH('./modules/user'), // 中专分发 - 能写一遍别写两遍
  order: PATH('./modules/order')
}))

window._STORE.subscribe(() => {
  let state = window._STORE.getState() // 本地持久化
  Object.keys(state).map(key => $setlocalStorag(key, state[key]))
})
