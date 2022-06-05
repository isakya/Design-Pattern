// 明星
let star = {
  name: 'zs',
  age: 12,
  phone: '123456'
}

// 经纪人
let agent = new Proxy(star, {
  get: function (target, key) {
    if (key === 'phone') {
      // 返回经纪人自己的电话
      return '123123123'
    }
    if (key === 'price') {
      // 明星不报价，经纪人报价
      return 120000
    }
    return target[key]
  },
  set: function (target, key, val) {
    if (key === 'customPrice') {
      if (val < 100000) {
        // 最低10w
        throw new Error('价格太低')
      } else {
        target[key] = val
        console.log('价格:', val, '合适', '达成协议')
        return true
      }
    }
  }
})

// test
console.log(agent.customPrice = 200000)