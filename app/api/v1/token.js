const Router = require('koa-router')
const {
    TokenValidator,
    NotEmptyValidator
} = require('../../validators/validator')
const { generateToken } = require('../../../core/util')
const {LoginType} = require("../../lib/enum");
const {
    User
} = require('../../models/user')
const {Auth} = require('../../../middlewares/auth')




const router = new Router({
    prefix: '/v1/token'
})


router.post('/', async (ctx) => {
    let token;
    const validate = await new TokenValidator().validate(ctx)
    switch (validate.get('body.type')) {
        case LoginType.USER_EMAIL:
            token = await emailLogin(validate.get('body.account'),
                validate.get('body.secret'))
            break
        case LoginType.USER_MINI_PROGRAM:
            break;
        default:
            break;

    }
    ctx.body = {
        token
    }
})


async function emailLogin(account, secret) {
    const user = await
        User.verifyEmailPassword(account, secret)
    return token = generateToken(user.id, Auth.USER)
}


module.exports = router