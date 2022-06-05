// ES7 带参数的装饰器
function testDec(isDec) { // 参数接受
  return function (target) { // 返回函数默认接受的是一个类，所以参数不能在这里接收
    target.isDec = isDec
  }
}

// ES7 装饰类
@testDec(false)
class Demo {

}

alert(Demo.isDec)