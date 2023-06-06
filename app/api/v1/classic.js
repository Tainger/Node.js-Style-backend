const Router = require('koa-router')
const {HttpException} = require('../../../core/http-exception');
const {PositiveIntegerValidator} = require('../../validators/validator');
const router = new Router();

router.post('/v1/:id/classic/latest', (ctx, next) =>{
    //path
    const path = ctx.request.params
    const query = ctx.request.query
    const header = ctx.request.header
    const body = ctx.request.body
    ctx.body= {'key':'value'}
    const validator = new PositiveIntegerValidator()
    validator.validate(ctx)

    console.log("获取path id" + validator.get('path.id'))
    next()
})


module.exports = router;