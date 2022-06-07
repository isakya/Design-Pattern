// const StateMachine = require("javascript-state-machine")

// // 状态机模型

// let fsm = new StateMachine({
//   init: 'pending', // 初始化状态
//   transitions: [
//     {
//       name: 'resolve', // 事件名称
//       from: 'pending',
//       to: 'fullfilled'
//     },
//     {
//       name: 'reject',
//       from: 'pending',
//       to: 'rejected'
//     }
//   ],
//   methods: {
//     // 监听 resolve
//     onResolve: function (data) {
//       // state - 当前状态机实例；data - fsm.resolve(xxx) 传递的参数
//       data.succesList.forEach(fn => fn())
//     },
//     // 监听失败 reject
//     onReject: function (data) {
//       // state - 当前状态机实例；data - fsm.reject(xxx)
//       data.failList.forEach(fn => fn())
//     }
//   }
// })

// // 定义 Promise
// class MyPromise {
//   constructor(fn) {
//     this.succesList = []
//     this.failList = []
//     fn(function () {
//       // resolve 函数
//       fsm.resolve(this)
//     }, function () {
//       // reject 函数
//       fsm.reject(this)
//     })
//   }
//   then(succesFn, failFn) {
//     this.succesList.push(succesFn)
//     this.failList.push(failFn)
//   }
// }

// // 测试代码
// function loadImg(src) {
//   const promise = new MyPromise(function (resolve, reject) {
//     let img = document.createElement('img')
//     img.onload = function () {
//       resolve(img)
//     }
//     img.onerror = function () {
//       reject()
//     }
//     img.src = src
//   })
//   return promise
// }

// let src = 'https://img1.baidu.com/it/u=722430420,1974228945&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'

// let result = loadImg(src)

// result.then(function () {
//   console.log('ok1')
// }, function () {
//   console.log('fail1')
// })

// result.then(function () {
//   console.log('ok2')
// }, function () {
//   console.log('fail2')
// })



// 三个状态
// const PENDING = 'PENDING' // 默认的状态
// const FULFILLED = 'FULFILLED'
// const REJECT = 'REJECT'


// class Promise {
//   constructor(exector) { // 初始化
//     this.state = PENDING
//     exector()
//   }
// }



class Commitment {
  static PENDING = 'PENDING' // 默认的状态
  static FULFILLED = 'FULFILLED'
  static REJECTED = 'REJECTED'
  constructor(func) {
    this.status = Commitment.PENDING
    this.result = null
    this.resolveCallbacks = []
    this.rejectCallbacks = []
    try {
      func(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }
  resolve(result) {
    setTimeout(() => {
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.FULFILLED
        this.result = result
        this.resolveCallbacks.forEach(fn => {
          fn(result)
        })
      }
    })
  }
  reject(result) {
    setTimeout(() => {
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.REJECTED
        this.result = result
      }
      this.rejectCallbacks.forEach(fn => {
        fn(result)
      })
    })
  }
  then(onFUFILLED, onREJECTED) {
    return new Commitment((resolve, reject) => {
      onFUFILLED = typeof onFUFILLED === 'function' ? onFUFILLED : () => { }
      onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => { }
      if (this.status === Commitment.PENDING) {
        this.resolveCallbacks.push(onFUFILLED)
        this.rejectCallbacks.push(onREJECTED)
      }
      if (this.status === Commitment.FULFILLED) {
        queueMicrotask(() => {
          onFUFILLED(this.result)
        })
      }
      if (this.status === Commitment.REJECTED) {
        queueMicrotask(() => {
          onREJECTED(this.result)
        })
      }
    })
  }
}

console.log('第一')
let commitment = new Commitment((resolve, reject) => {
  // resolve('这次一定')
  console.log('第二')
  // throw new Error('白嫖')
  setTimeout(() => {
    resolve('这次一定')
    console.log('第四')
  })
})

commitment.then(
  res => { console.log(res) },
  // undefined,
  res => { console.log(res.message) }
).then(
  res => { console.log(res) },
  // undefined,
  res => { console.log(res.message) }
)
console.log('第三')