const Router = require('koa-router')
const router = new Router()
const test = require('./test')
const getTest = require('./test/getTest')
const postTest = require('./test/postTest')
// const login = require('./login')
const asyncPage = require('./async-page')

router.get('/router/test', test)
router.get('/router/getTest', getTest)
router.post('/router/postTest', postTest)

router.get('/router/async-page',asyncPage)
// router.post('/router/login', login)

module.exports = router