((doc: any, win: any) => {
  let docEl: any = doc.documentElement
  let resizeEvt: string = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = () => {
    let clientWidth: any = docEl.clientWidth
    if (!clientWidth) {
      return
    }
    docEl.style.fontSize = 100 * (clientWidth / 499.9) + 'px'
  }
  if (!doc.addEventListener) {
    return
  }
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)