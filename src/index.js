function each(data) {
  // 带有遍历器特性的对象 就是 data[Symbol.iterator] 有值 才能用 for ... of
  // for ... of 迭代器语法糖
  for (let item of data) {
    console.log(item)
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