#koa web server test

- npm init

- npm install koa --save

- touch app.js

- node app.js

## 开始1 最简单的server
app.js
```
const Koa = require('koa')
const app = new Koa()

// response
app.use(ctx => {
	console.log(ctx.request.url)
	ctx.body = `Hello Koa${ctx.request.url}`
})

app.listen(3030)
```

## 开始2 加入koa-router

- npm install koa-router --save

加上路由的的app.js为
```
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

// 如果有post 这里要加上，用于解析request.body   ```npm install koa-bodyparser --save```
// const bodyParser = require('koa-bodyparser')
// app.use(bodyParser())

router.get('/', ctx => {
  ctx.body = `这是主页`
})

router.get('/user', ctx => {
  ctx.body = `这是user页`
})

router.get('/post', ctx => {
  ctx.body = ctx.request.body
})

router.get('/async', async ctx => {
  const sleep = async (ms) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, ms)
    })
  }
  await sleep(1000)
  ctx.body = `这是异步处理页`
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3030)
```

## 开始3 分离router 和 静态资源

- 目录

```

-node_modules
-routes  路由
	index.js
	login.js
	test.js
-static  静态文件
	index.html
app.js
package.json
readme.md
.gitignore

```
- app.js
```
const Koa = require('koa')
const static = require('koa-static')
const app = new Koa()
const router = require('./routers/index')
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())
app.use(static('./static'));//静态资源
app
.use(router.routes())
.use(router.allowedMethods())

//404 page
app.use(async (ctx) => {
  ctx.status = 404
  ctx.body = `404 Not Found `
})
app.listen(3030)
```

- routes/index.js 集成所有路由

```
const Router = require('koa-router')
const router = new Router()
const test = require('./test')
const asyncPage = require('./async-page')

router.get('/router/test', test)
router.get('/router/async-page',asyncPage)

module.exports = router
```

- test.js 具体路由文件

```
module.exports = function (ctx) {
	ctx.body = `test page`
}
```