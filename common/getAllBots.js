const axios = require('axios').default;

const bots = []

axios.get('https://api.dogehouse.xyz/v1/bots')
    .then(function (response) {
        response.data.bots.forEach(bot => {
            bots.push(bot.bot.username)
        })
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {

    });

module.exports = bots