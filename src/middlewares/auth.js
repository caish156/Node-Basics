const { messages, httpCodes, strings } = require("../constants");
const { getRoleById } = require("../services");
const dotenv = require("dotenv").config({ path: __dirname + "../../../.env" });
const jwt = require("jsonwebtoken");
const { getUserById } = require("../services/user-service");
const { CustomeError, sendErrorResponse } = require("../utils");

const getTokenFromHeaders = (req) => {
  const token =
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
      ? req.headers.authorization.split(" ")[1]
      : null;
  if (token) {
    return token;
  } else {
    throw new CustomeError(
      messages.AUTH.INVALID_REQUEST,
      httpCodes.UNAUTHORIZED
    );
  }
};
const verifyJwtToken = (token, tokenType) => {
  try {
    return jwt.verify(
      token,
      tokenType === strings.TOKEN.AUTH_TOKEN
        ? process.env.JWT_SECRET
        : process.env.REFRESH_TOKEN_SECRET
    );
  } catch (error) {
    return null;
  }
};

const verifyRole = async (decode, allowedRoles) => {
  const role = await getRoleById(decode.role_id);
  if (!allowedRoles.includes(role))
    throw new CustomeError(
      messages.AUTH.INVALID_REQUEST,
      httpCodes.UNAUTHORIZED
    );
};

const checkuserStatus = async (currentUser) => {
  const user = await getUserById(currentUser.id);
  if (user.active == false)
    throw new CustomeError(messages.USER.INACTIVE, httpCodes.UNAUTHORIZED);
  if (user.role_id !== currentUser.role_id) throw new Error();
};

const verifyToken = async (decoded, allowedRoles, req, next) => {
  await verifyRole(decoded, allowedRoles);
  await checkuserStatus(decoded);
  req.user = decoded;
  next();
};

// function to authenticate user
module.exports.authenticate = (allowedRoles) => {
  return async (req, res, next) => {
    try {
      const token = getTokenFromHeaders(req);
      const decoded = verifyJwtToken(token, strings.TOKEN.AUTH_TOKEN);
      await verifyToken(decoded, allowedRoles, req, next);
    } catch (err) {
      return sendErrorResponse({
        res,
        error: {
          message: messages.AUTH.NOT_AUTHORIZED_TO_ACCESS,
          statusCode: httpCodes.INVALID_TOKEN,
        },
      });
    }
  };
};
