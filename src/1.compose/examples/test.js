const { trust } = require('../../../common/util')
const compose = require('../')

// 模拟函数
const checkUserInput = ({ username, password }) => {
  if (!trust(username) || !trust(password)) {
    throw new Error('用户名或者密码不能为空')
  }
  return { username, password }
}
const checkUserInfo = ({ username, password }) => ({ status: 'normal', id: '100' })
const analyzeTocken = ({ status, id }) => ({ status: 'normal', id: '100', name: 'lhj', tocken: 'zHcuqhrehduqwexxx' })
const login = user => ({ redirectUrl: 'http://www.taobao.com/' })
const redirect = feedback => ({ code: '10000' })

// 重构后代码
const enter = compose(checkUserInput, checkUserInfo, analyzeTocken, login, redirect)

console.log(enter({username: 'aa', password: 'bb'}))