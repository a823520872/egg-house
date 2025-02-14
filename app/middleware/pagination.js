'use strict';

module.exports = () => {
    return async (ctx, next) => {
        if (!ctx.pagination) {
            const query = ctx.query;
            const config = ctx.app.config;
            const pagination = {};

            // 这里限制了最大 limit，不知道实际上需不需要
            pagination.limit = Math.min(100, Number.parseInt(query.pageSize || config.default_limit, 10));
            const page = Math.max(1, Number.parseInt(query.page || config.default_page, 10));
            pagination.offset = (page - 1) * pagination.limit;

            ctx.pagination = pagination;
        }
        await next();
    };
};
