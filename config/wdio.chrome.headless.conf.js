const {config} = require("./wdio.conf");
const chromeHeadlessConfig = {
    ...config,
    services: ['chromedriver'],
    capabilities: [{
        maxInstances: 5,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1280,800', '--allow-insecure-localhost']
        },
    }]

};

exports.config = chromeHeadlessConfig;