// 装饰器模式
class Circle {
  draw() {
    console.log('画圆型')
  }
}

// 装饰器
class Decorator {
  constructor() {
    this.circle = circle
  }
  draw() {
    this.circle.draw()
    this.setRedBorder(circle)
  }
  setRedBorder(circle) {
    console.log('设置红色边框')
  }
}

// 测试代码
let circle = new Circle()
circle.draw()

let dec = new Decorator(circle)
dec.draw()