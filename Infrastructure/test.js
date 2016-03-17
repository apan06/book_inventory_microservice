/**
 * Created by michalapanowicz on 17/03/16.
 */

var _=require('lodash');
var baseConfig = require('./base').config;
var configurator = require('./base').configurator;

var test = {
    name: 'mapano-book-inventory-test',
    config_vars: {
        NAME: "Michał-test"
    },
    addons: {mongolab: {plan: 'mongolab:sandbox'}}
};

var finalConfig = _.merge({}, baseConfig, test);
configurator(finalConfig);
