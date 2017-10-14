let MemberLogin = {
  api: '/api/member/doLogin',
  callbacker: function (req, res) {
    let username = req.body.username
    let password = req.body.password
    let response = {code: 200, message: 'success', data: {}}
    if (username !== MemberLogin.data.username || password !== MemberLogin.data.password) {
      response.code = 501
      response.message = 'invalid username'
    } else {

    }
    response.data = MemberLogin.data
    // response.req = req.body
    res.send(response)
  },
  data: {
    id: 1,
    username: 'guzhongzhi@qq.com',
    password: '123456'
  }
}
module.exports = MemberLogin
