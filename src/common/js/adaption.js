((doc, win) => {
  let docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      let clientWidth = docEl.clientWidth
      if(!clientWidth) return // 750 是看psd设计稿的宽度
      docEl.style.fontSize = 100 * (clientWidth / 499.9) + 'px'
    }
  if(!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
