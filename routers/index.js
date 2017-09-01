const Router = require('koa-router')
const router = new Router()
const test = require('./test')
// const login = require('./login')
const asyncPage = require('./async-page')

router.get('/router/test', test)
router.get('/router/async-page',asyncPage)
// router.post('/router/login', login)

module.exports = router