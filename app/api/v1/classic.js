const Router = require('koa-router')
const {HttpException} = require("../../../core/http-exception");

const router = new Router();

router.post('/v1/:id/classic/latest', (ctx, next) =>{
    //path
    const path = ctx.request.params
    const query = ctx.request.query
    const header = ctx.request.header
    const body = ctx.request.body
    ctx.body= {'key':'value'}
    throw new HttpException('API Exception')
    next()
})


module.exports = router;