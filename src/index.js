function each(data) {
  // 生成遍历器
  let iterator = data[Symbol.iterator]()
  // data[Symbol.iterator]().next()注意不能直接next
  // 这样只会重复拿到 index 0 的值

  let item = { done: false }

  // b.next()
  // { value: 'a', done: false }
  // b.next()
  // { value: 'b', done: false }
  // b.next()
  // { value: 'c', done: false }
  // b.next()
  // { value: undefined, done: true } // 没有数据时返回

  while (!item.done) {
    item = iterator.next()
    if (!item.done) {
      console.log(item.value)
    }
  }
}

let a = '12345'
let arr = [1, 2, 3, 4]
let m = new Map()
m.set('a', 100)
m.set('b', 100)

each(a)
each(m)
each(arr)