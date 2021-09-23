const axios = require('axios');

require('dotenv').config()

const port = process.env.PORT || 3001;

module.exports = async () => {
  return axios.create({
    baseURL: `http://localhost:${port}/`
  });
}