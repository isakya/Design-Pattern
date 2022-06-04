export {}
// 父类
class People {
  name: string
  age: number
  protected weight: number // 受保护的属性，只有自己或者子类可以访问
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.weight = 120
  }
  eat() {
    console.log(`${this.name} eat something`)
  }
  speak() {
    console.log(`My name is ${this.name}, age ${this.age}`)
  }
}

// 子类 继承父类
class Student extends People {
  number:number
  private girlfriend:string
  constructor(name: string, age: number, number: number) {
    super(name, age)
    this.number = number
    this.girlfriend = 'xiaoli'
  }
  study() {
    console.log(`${this.name} study`)
  }
  getWeight() {
    console.log(`weight ${this.weight}`)
  }
}

let xiaoming = new Student('xiaoming', 10, 20221111)
xiaoming.getWeight()
// xiaoming1.girlfriend() 私有属性，访问不了