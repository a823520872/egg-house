'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async getHouseById(id) {
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeService;