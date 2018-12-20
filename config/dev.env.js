'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://192.168.1.119:3838/"'
  // BASE_API: '"http://192.168.1.107:3838/"'
  BASE_API: '"http://sdk.fangxinqian.cn:3838/"'
})
