const bcrypt = require("bcryptjs");
const { appConfigs } = require("../config");
const { CustomeError } = require("./error-utils");
const { messages, httpCodes, strings } = require("../constants");
const dotenv = require("dotenv").config({ path: __dirname + "/../../.env" });
const jwt = require("jsonwebtoken");



module.exports.generateHashedString = (string) => {
  const salt = bcrypt.genSaltSync(parseInt(appConfigs.auth.salt_rounds));
  const hash = bcrypt.hashSync(string, salt);
  return hash;
};

module.exports.compareHashedString = (string, hashedString) => {
  const match = bcrypt.compareSync(string, hashedString);
  if (!match)
    throw new CustomeError(
      messages.AUTH.INVALID_CREDENTIALS,
      httpCodes.UNAUTHORIZED
    );
  return match;
};

module.exports.generateAuthToken = (tokenPayload) => {
  /*payload → The data stored inside the token (e.g., id, email, role).
      secretKey → Used to sign the token (must be kept private).
      options → Includes expiresIn, which defines how long the token is valid.
*/
  return jwt.sign(
    tokenPayload, // Payload (User Data)
    process.env.JWT_SECRET, // Secret Key
    { expiresIn: process.env.JWT_EXPIRES_IN } // Expiry Time
  );
};
module.exports.generateRefreshToken = (tokenPayload) => {
  return jwt.sign(
    tokenPayload, // Payload (User Data)
    process.env.REFRESH_TOKEN_SECRET, // Secret Key
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRES } // Expiry Time
  );
};


