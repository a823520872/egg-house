'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
    async findByName(name) {
        let result;
        try {
            result = await this.app.mysql.get('fa_admin', { username: name });
        } catch (error) {
            result = error;
        }
        return result;
    }
}

module.exports = AdminService;
