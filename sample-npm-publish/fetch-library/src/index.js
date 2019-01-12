const axios = require("axios");

function fetchSample(path) {
    return axios.get(path)
        .then(function (response) {
            // handle success
            console.log(response);
        });
};

module.exports = fetchSample;