// 状态(红灯、绿灯、黄灯)
class State {
  constructor(color) {
    this.color = color
  }
  handle(context) {
    console.log(`turn to ${this.color} light`)
    // 设置状态
    context.setState(this)
  }
}

// 主体
class Context {
  constructor() {
    this.state = null
  }
  // 获取状态
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
  }
}

// test
let context = new Context()

let green = new State('green')
let red = new State('red')
let yellow = new State('yellow')

// 绿灯亮了
green.handle(context)
// 打印状态
console.log(context.getState())


// 核心：
// 状态的切换 和 状态的获取是分开的，在逻辑上做了个分离