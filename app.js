const Koa = require('koa')
const initManager = require('./core/init')
const parser = require('koa-bodyparser')
const catchError = require('./middlewares/exception')

const app = new Koa()

app.use(catchError)
app.use(parser())
initManager.initCore(app)

//应用程序对象
app.listen(3000)



