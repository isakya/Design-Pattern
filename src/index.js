
function loadImg(src) {
  let promise = new Promise(function (resolve, reject) {
    let img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject('图片加载失败')
    }
    img.src = src
  })

  return promise
}

let src = 'https://img2.baidu.com/it/u=1750850684,2224293635&fm=253&fmt=auto&app=138&f=PNG?w=499&h=295'
let result = loadImg(src)

result.then(res => {
  // part1
  alert(`width: ${res.width}`)
  return res
}).then(res => {
  // part2
  alert(`height: ${res.height}`)
}).catch(err => {
  alert(err)
})