const {config} = require("./wdio.conf");

const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', {firefox: 'latest'}]],
    capabilities: [{
        maxInstances: 5,
        browserName: "firefox",
        'moz:firefoxOptions': {
            args: ["--width=1900",
                "--height=1000"]
        },
    }],
    "windowSize": "maximize",
};

exports.config = firefoxConfig;