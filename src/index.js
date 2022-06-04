// 具体产品
class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    alert('init')
  }
  fn1() {
    alert('fn1')
  }
  fn2() {
    alert('fn2')
  }
}

// 工厂 将new操作单独封装
class Creator {
  create(name) {
    return new Product(name)
  }
}

// 测试
let creator = new Creator()
let p = creator.create('p1')

p.init()
p.fn1()