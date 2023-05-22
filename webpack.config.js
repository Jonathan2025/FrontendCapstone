// Dotenvwebpack will allow us to use .env variables anywhere in our application
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  plugins: [
    new DotenvWebpackPlugin(),
  ],
};