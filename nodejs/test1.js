// stream 用到自定义事件
const fs = require('fs')
const readline = require('readline')

let rl = readline.createInterface({
  input: fs.createReadStream('./data/file1.txt')
})

// 行数
let lineNum = 0

rl.on('line', function () {
  lineNum++
})

rl.on('close', function () {
  console.log('lineNum', lineNum)
})