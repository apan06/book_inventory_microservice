/**
 * Created by michalapanowicz on 17/03/16.
 */
var _=require('lodash');
var baseConfig = require('./base').config;
var configurator = require('./base').configurator;


var prod = {
    name: 'mapano-book-inventory-service',
    config_vars: {
        MONGOLAB_URI: process.env.MONGOLAB_URI,
        NAME: "Michał"
    },
    addons: {mongolab: {plan: 'mongolab:sandbox'}},
    domains: ['mapano-book-inventory-service.herokuapp.com']
};


var finalConfig = _.merge({}, baseConfig, prod);
configurator(finalConfig);