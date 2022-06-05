// 观察者模式

// 主题，保存状态，状态变化之后触发所有观察者对象
class Subject {
  constructor() {
    this.state = 0
    this.observers = []
  }
  // 获取当前主题
  getState() {
    return this.state
  }
  // 主题更新，调用通知所有订阅者
  setState(state) {
    this.state = state
    this.notifyAllObservers()
  }
  // 通知所有订阅者
  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
  // 添加订阅者
  attach(observer) {
    this.observers.push(observer)
  }
}

// 观察者
class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }
  update() {
    console.log(`${this.name} update, state: ${this.subject.getState()}`)
  }
}

// 测试
let s = new Subject()
let o1 = new Observer('o1', s)
let o2 = new Observer('o2', s)
let o3 = new Observer('o3', s)

// 更新主题
s.setState(1)