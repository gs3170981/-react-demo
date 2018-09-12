 // localStorag - 存储信息有效期
export function $setlocalStorag(
    name: string,
    value: any,
    timeout: number = 365 * 24 * 60 * 60 * 1000
) {
  let now: number = Date.now()
  timeout = now + timeout
  value = Object.assign(value, {
    'savedate': now,
    'timeout': timeout
  })
  localStorage.setItem(name, JSON.stringify(value))
}
// localStorag - 获取信息有效期
export function $getTimeStore(name: string) {
  let getLocal: any = localStorage.getItem(name)
  let data: any = getLocal ? JSON.parse(getLocal) : {}
  let now: any = Date.now()
  // 获取超时时间,判断是否返回
  if (data.timeout) {
    return data.timeout < now ? {} : data
  } else {
    return {}
  }
}
// localStorag - 删除信息   
export function $deleteStore(name: string) {
  localStorage.removeItem(name)
}
// localStorag - 自动存储浏览记录
// export function $saveFrom(prop) {
//   let name = prop.pagename,
//     transit = prop.location,
//     qhfrom = transit.query.qhfrom, //默认全部返回首页
//     para = transit.query.para ? JSON.parse(transit.query.para) : '';
//   if (!qhfrom) return false;
//   var paths = localStorage.getItem("FromUrlStore") ? JSON.parse(localStorage.getItem("FromUrlStore")) : {};
//   if (localStorage) {
//     paths[name] = {
//       'name': qhfrom, //存储来源页面
//       'para': para //存储来源页面的参数
//     }
//     localStorage.setItem("FromUrlStore", JSON.stringify(paths));
//   }
// }
// 返回localstorage - 存储的对应目录记录
// export function $getBack(name) {
//   var paths = {};
//   if (localStorage) {
//     paths = localStorage.getItem("FromUrlStore") ? JSON.parse(localStorage.getItem("FromUrlStore")) : '';
//     return paths && paths[name] ? paths[name] : {
//       'name': 'home'
//     }
//   }
// }
export function $id(id: string) {
  return document.getElementById(id)
}
export function $class(klass: string) {
  return document.getElementsByClassName(klass)
}
// // 链式调用
// export class $Promise {
//   constructor (fn) {
//     this.arr = []
//     this.count = -1
//     fn(this)
//   }
//   then (r) {
//     if (typeof (r) === 'function') {
//       this.arr.push(r)
//       return this
//     } else {
//       setTimeout(() => {
//         this.arr[++this.count] && this.arr[this.count](this, r)
//       }, 0)
//     }
//   }
// }
