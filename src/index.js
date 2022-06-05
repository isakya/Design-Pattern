import { deprecate } from "core-decorators"

class Person {
  // 提示API废用信息
  @deprecate('即将废用', { url: 'www.baidu.com' })
  name() {
    return 'zs'
  }
}

const p = new Person()

p.name()