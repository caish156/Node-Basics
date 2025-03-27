const dotenv = require("dotenv").config({ path: __dirname + "/../../.env" });

module.exports.appConfigs = {
  // app: {
  //   port: process.env.PORT,
  //   host: process.env.APP_HOST,
  //   environment: process.env.NODE_ENV,
  // },
  auth: {
    // refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    // jwt_auth_token_secret: process.env.AUTH_TOKEN_SECRET,
    salt_rounds: process.env.SALT_ROUND,
  },
};
