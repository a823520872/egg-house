'use strict';

// had enabled by egg
// exports.static = true;

exports.mongoose = {
    enable: true,
    package: 'egg-mongoose'
};

exports.mysql = {
    enable: true,
    package: 'egg-mysql'
};

exports.validate = {
    enable: true,
    package: 'egg-validate'
};
