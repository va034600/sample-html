var _ = require('underscore');
var https = require('https');

function fetchSample(path) {
    var req = https.request(path, (res) => {
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
    })
    req.end();
    _.each([1, 2, 3], console.log);
};

module.exports = fetchSample;