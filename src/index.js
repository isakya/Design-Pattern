import { readonly } from "core-decorators"

class Person {
  constructor() {

  }
  @readonly
  name() {
    return 'zs'
  }
}

let p = new Person()
p.name = function () {
  return 123
}
// console.log(p.name()) 报错，name因为只读不能修改