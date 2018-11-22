const axios = require('axios')

const api = axios.default.create({
    baseURL: "https://cryptic-retreat-41638.herokuapp.com/api/contacts"
})

module.exports = {api};