const Sequelize = require('sequelize')
const {dbName, host, port, user, password} = require('../config/config').database



const sequelize = new Sequelize(dbName, user, password, {
    dialect:'mysql',
    host,
    port,
    logging: console.log,
    timezone: '+08:00',
    define:{
        //create_time  update_time delete_time
        timestamps:true,
        paranoid:true,
        createdAt:'created_at',
        updatedAt:'updated_at',
        deletedAt:'deleted_at',
        underscored:true,
        freezeTableName:true,
        scopes:{
            bh:{
                attributes:{
                    exclude:['updated_at','deleted_at','created_at']
                }
            }
        }
    }
})


// 执行数据库同步
sequelize.sync({ force: false }).then(() => {
    console.log('Database synchronized');
}).catch((error) => {
    console.error('Error syncing database:', error);
});

module.exports = {
    db:sequelize
}