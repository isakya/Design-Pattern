// 命令模式

// 接受者
class Receiver {
  exec() {
    console.log('执行')
  }
}

// 命令者
class Command {
  constructor(receiver) {
    this.receiver = receiver
  }
  cmd() {
    console.log('传达命令')
    this.receiver.exec()
  }
}

// 触发者
class Invoker {
  constructor(command) {
    this.command = command
  }
  Invoke() {
    console.log('开始')
    this.command.cmd()
  }
}

// 士兵
let soldier = new Receiver()
// 小号手
let trumpeter = new Command(soldier)

// 将军
let general = new Invoker(trumpeter)

general.Invoke()