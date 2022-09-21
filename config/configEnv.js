const { config } = require('dotenv');
require('dotenv').config();
const configEnv = {
      PORT,
      DB_URL
} = process.env;

module.exports = configEnv