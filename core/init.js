const requireDirectory = require("require-directory");
const Router = require("koa-router");

class InitManager{

    static initCore(app){
        InitManager.app = app;
        InitManager.initLoadRouters()
        InitManager.loadConfig()
    }

    //初始化配置
    static loadConfig(path = '') {
        const configPath = path || process.cwd() + '/config/config.js'
        const config = require(configPath)
        global.config = config
    }

    //初始化路由
    static initLoadRouters() {
        const apiDirectory = `${process.cwd()}/app/api`
        requireDirectory(module, apiDirectory, {
            visit:whenLoadModule
        })


        function whenLoadModule(obj) {
            if(obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }
    }

    //加载异常
    static loadHttpException(){
        const errors = require('./http-exception')
        global.errs = errors
    }
}



module.exports = InitManager