// 车 父类
class Car {
  constructor(name, number) {
    this.number = number
    this.name = name
  }
}

// 快车
class Kuaiche extends Car {
  constructor(name, number) {
    super(name, number)
    this.price = 1
  }
}

// 快车
class Zhuanche extends Car {
  constructor(name, number) {
    super(name, number)
    this.price = 2
  }
}

// 行程
class Trip {
  constructor(car) {
    this.car = car
  }
  start() {
    console.log(`车牌号：${this.car.number}, 车型：${this.car.name}`)
  }
  end() {
    console.log(`价格：${this.car.price}/公里, 总价：${this.car.price * 5}`)
  }
}

const car = new Kuaiche('奥迪', 88888)
const t = new Trip(car)

t.start()
t.end()

const superCar = new Zhuanche('保时捷', 99999)
const trip = new Trip(superCar)

trip.start()
trip.end()