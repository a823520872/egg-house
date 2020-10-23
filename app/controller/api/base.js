const Controller = require('egg').Controller;

class BaseController extends Controller {
    getResponse(res) {
        let requestFail = res instanceof Error
        // res.message
        return {
            code: requestFail ? 0 : 1,
            data: requestFail ? res.errors : res,
            msg: requestFail ? '请求失败' : '请求成功'
        };
    }
}
