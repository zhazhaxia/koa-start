const Koa = require('koa')
const static = require('koa-static')//静态资源
const app = new Koa()
const router = require('./routes/index')
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())
app.use(static('./static'));//静态资源
app
.use(router.routes())
.use(router.allowedMethods())

app.use(async (ctx) => {
  ctx.status = 404
  ctx.body = `404 Not Found `
})
var port = 3030;
app.listen(port)
console.log('server is runing on :port '+port)