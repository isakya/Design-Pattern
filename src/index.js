class jQuery {
  constructor(selector) {
    let slice = Array.prototype.slice
    let dom = slice.call(document.querySelectorAll(selector))
    let len = dom ? dom.length : 0
    for (let i = 0; i < len; i++) {
      this[i] = dom[i]
    }
    this.length = len
    this.selector = selector || ''
  }
  append(node) {

  }
  addClass(name) {

  }
  html(data) {

  }
}

window.$ = function (selector) {
  return new jQuery(selector)
}

// 测试代码
var $p = $('p')
console.log($p)
console.log($p.addClass)
//  NodeList 节点实例很像数组,可以使用length属性和forEach方法。但是,它不是数组,不能使用pop或push之类数组特有的方法
console.log(document.querySelectorAll('p'))