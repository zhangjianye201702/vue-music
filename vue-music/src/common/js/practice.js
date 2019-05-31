// 获取cookie
document.cookie

// 增加cookie
document.cookie = 'userId = 1'

// 设置过期时间
let expireDate = new Date(24 * 36e5 + time)
document.cookie = 'userId = 1; expires =' + expireDate.toUTCString()

// 获取某个cookie
getCookie('wlowoelele')

function getCookie (name) {
  let cookieAry = document.cookie.split(/;\s/)
  for (let i = 0; i < cookieAry.length; i++) {
    let cookie = cookieAry[i].split('=')
    if (cookie[0] === name) {
      return cookie[1]
    }
  }
  return ''
}

// 删除cookie
document.cookie = 'elwlw=; expires=' + new Date(Date.now() - 1000).toUTCString()

// localStorage存储
localStorage.setItem('userid', 1)

// localStorage 设置过期时间
let expires = 24 * 36e5 * 7
localStorage.setItem('userid', JSON.stringify({
  data: 1,
  stamp: Date.now() + expires
}))

let storeUserid = JSON.parse(localStorage.getItem('userid'))
let uidStamp = storeUserid.stamp
let userId = ''

if (uidStamp <= Date.now()) {
  localStorage.removeItem('userid')
} else {
  userId = storeUserid.data
}