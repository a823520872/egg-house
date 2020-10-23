'use strict'

module.exports = app => {
    const { router, controller, middleware } = app
    const { admin, house } = controller.api
    const pagination = middleware.pagination()

    router.post('/api/admin/User/login', admin.login)
    // router.get('/houses', pagination, house.index);
    // router.get('/house/:id', house.show);
}
