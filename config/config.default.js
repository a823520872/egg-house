'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = (exports = {});
  config.host = 'http://zhiqiang.ink';

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546093356089_9613';

  // add your config here
  config.middleware = [];
  config.upload = {
    path: path.join(__dirname, '../app/public/upload/'),
    url: '/public/upload/',
  };
  // config.mongoose = {
  //     url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1:27017/egg_house',
  //     options: {
  //         server: {
  //             poolSize: 20
  //         },
  //         reconnectTries: 10,
  //         reconnectInterval: 500
  //     }
  // }

  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'house',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.security = {
    csrf: {
      ignore: '/api/*/*',
    },
  };
  config.default_page = 1;
  config.default_limit = 20;

  return config;
};
