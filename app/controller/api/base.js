const Controller = require('egg').Controller;

class BaseController extends Controller {
    getResponse(res) {
        console.log(res);
        console.log(res instanceof Error);
        return {
            code: res instanceof Error ? 0 : 1,
            data: res instanceof Error ? res.errors : res,
            msg: res.message || '请求成功'
        };
    }
}
