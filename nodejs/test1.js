const EventEmitter = require('events').EventEmitter

// 简单使用
// const emitter1 = new EventEmitter()
// // 监听 some 事件
// emitter1.on('some', info => {
//   console.log('fn1', info)
// })
// // 监听 some 事件
// emitter1.on('some', info => {
//   console.log('fn2', info)
// })

// // 触发 some 事件
// emitter1.emit('some', 'xxx')



// 继承用法
class Dog extends EventEmitter {
  constructor(name) {
    super()
    this.name = name
  }
}

let simon = new Dog('simon')
simon.on('bark', function () {
  console.log(this.name, 'barked')
})

setInterval(function () {
  simon.emit('bark')
}, 1000)