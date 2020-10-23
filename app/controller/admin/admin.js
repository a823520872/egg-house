const BaseController = require('../api/base');

class AdminController extends BaseController {
    async login() {
        const { ctx, service } = this;
        const rules = { account: { type: 'string' }, password: { type: 'string' } };
        let res;
        try {
            ctx.validate(rules);
            res = await service.admin.findByName(ctx.request.body.account);
            if (res) {
            }
        } catch (error) {
            res = error;
        }
        ctx.body = this.getResponse(res);
    }
}

module.exports = AdminController;
