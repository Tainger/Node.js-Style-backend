const Router = require('koa-router')
const {Auth} = require("../../../middlewares/auth");

const router = new Router();

router.get('/v1/book/latest',  new Auth().m, (ctx, next) =>{

    ctx.body= {'key':'value'}

})


module.exports = router;