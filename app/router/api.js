'use strict';

module.exports = app => {
  const { router, controller, middleware } = app;
  const apiV1Router = router.namespace('/api');

  const { house } = controller.api;
  const pagination = middleware.pagination();

  apiV1Router.get('/houses', pagination, house.index);
  apiV1Router.get('/house/:id', house.show);
};
