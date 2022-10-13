const axios = require('axios');


exports.request = (url, method, data) => {
    return axios({url, method, data});
};