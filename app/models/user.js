const bcrypt = require('bcryptjs')
const {db} = require('../../core/db')
const {Sequelize, Model} = require('sequelize')


class User extends Model {
    static async verifyEmailPassword(email, plainPassword) {
        const user = await User.findOne({
            where: {
                email
            }
        })
        if (!user) {
            throw new global.errs.AuthFailed('账号不存在')
        }
        // user.password === plainPassword
        // const correct = bcrypt.compareSync(
        //     plainPassword, user.password)
        const correct = user.password === plainPassword
        if(!correct){
            throw new global.errs.AuthFailed('密码不正确')
        }
        return user
    }

    static async getUserByOpenid(openid){
        const user = await User.findOne({
            where:{
                openid
            }
        })
        return user
    }

    static async registerByOpenid(openid) {
        return await User.create({
            openid
        })
    }
}

User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nickname: Sequelize.STRING,
    email: {
        type: Sequelize.STRING(128),
        unique: true
    },
    password: Sequelize.STRING,
    openid: {
        type: Sequelize.STRING(64),
        unique: true
    }
}, {
    sequelize: db,
    tableName: 'user'
})


module.exports = {
    User
}
