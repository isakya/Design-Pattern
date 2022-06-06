// 迭代器模式代码实现
class Iterator {
  constructor(container) {
    this.list = container.list
    this.index = 0
  }
  next() {
    if (this.hasNext()) {
      return this.list[this.index++]
    }
    return null
  }
  hasNext() {
    if (this.index >= this.list.length) {
      return false
    }
    return true
  }
}

class Container {
  constructor(list) {
    this.list = list
  }
  // 生成遍历器
  getItertor() {
    return new Iterator(this)
  }
}

var arr = [1, 2, 3, 4, 5]

let container = new Container(arr)
let iterator = container.getItertor()
while (iterator.hasNext()) {
  console.log(iterator.next())
}