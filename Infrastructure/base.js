/**
 * Created by michalapanowicz on 17/03/16.
 */

var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var base = {
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        MONGOLAB_URI: process.env.MONGOLAB_URI,
        NAME: "Michał"
    },
    collaborators: ['michal.apanowicz@schibsted.pl',
        'wojciech.sromek@schibsted.pl'],
    features: {
        'runtime-dyno-metadata': {enabled: false},
        'log-runtime-metrics': {enabled: false},
        'http-session-affinity': {enabled: false},
        preboot: {enabled: false},
        'http-shard-header': {enabled: false},
        'http-end-to-end-continue': {enabled: false}
    },
    addons: {
        log_drains: ['syslog://data.logentries.com:13636']
    },
    formation: [{process: 'web', quantity: 1, size: 'Free'}],
    log_drains: []
};

module.exports = {
    config: base,
    configurator: configurator
};