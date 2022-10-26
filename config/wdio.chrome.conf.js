const {config} = require("./wdio.conf");

const chromeConfig = {
    ...config,
    services: ['chromedriver'],
    capabilities: [{
        maxInstances: 10,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--start-maximized']
        },
    }, ]
};

exports.config = chromeConfig;