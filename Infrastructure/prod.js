/**
 * Created by michalapanowicz on 17/03/16.
 */

var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

configurator.export('mapano-book-inventory-service').then(function (result) {
    console.log(result);
});

configurator(
    {
        name: 'mapano-book-inventory-service',
        region: 'eu',
        maintenance: false,
        stack: 'cedar-14',
        config_vars: {
            MONGOLAB_URI: process.env.MONGOLAB_URI,
            NAME: "Michał"
        },
        addons: {mongolab: {plan: 'mongolab:sandbox'}},
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
        formation: [{process: 'web', quantity: 1, size: 'Free'}],
        log_drains: [],
        domains: ['mapano-book-inventory-service.herokuapp.com']
    }
);