const { where, Op } = require("sequelize");
const { User } = require("../db/models");
const {
  compareHashedString,
  CustomeError,
  deleteObjectKeys,
  generateAuthToken,
  generateRefreshToken,
} = require("../utils");
const { messages, httpCodes, database } = require("../constants");
const db = require("../db/models");

const USER_EXCLUDED_FIELDS = [
  database.COLUMNS.CREATED_AT_COLUMN,
  database.COLUMNS.UPDATED_AT_COLUMN,
  database.COLUMNS.PASSWORD,
];

module.exports.getAllUSerService = async (req, res) => {
  const data = await User.findAll({
    include: {
      model: db.Role,
      as: database.MODELS.ROLE,
      attributes: ["name"],
    },
  });
  return data;
};

module.exports.loginUserService = async (req) => {
  const data = req.body; // ✅ Ensure 'credential' is present
  const user = await findUserForLogin(data);
  if (user.password === null) {
    throw new CustomeError(messages.USER.INACTIVE, httpCodes.UNAUTHORIZED);
  } else {
    compareHashedString(data.password, user.password);
    deleteObjectKeys(user, USER_EXCLUDED_FIELDS);
    const tokenPayload = {
      id: user.id,
      phone: user.phone,
      email:user.email,
      role_id: user.role_id,
    };

    const auth_token = generateAuthToken(tokenPayload);
    const refresh_token = generateRefreshToken(tokenPayload);

    return { ...user, auth_token, refresh_token };
  }
};

const findUserForLogin = async (data) => {
  const fields = [database.COLUMNS.USER.EMAIL, database.COLUMNS.USER.PHONE];
  const user = await User.findOne({
    where: {
      [Op.or]: fields.map((field) => ({
        [field]: data.credential,
      })),
    },
    include: {
      model: db.Role,
      as: database.MODELS.ROLE,
      attributes: ["name", "id"],
    },
    raw: true,
  });
  if (!user) {
    throw new CustomeError(messages.USER.NOT_FOUND, httpCodes.NOT_FOUND);
  }
  return user;
};

module.exports.getUserById = async (id)=>{
  return await db[database.MODELS.USER].findByPk(id);
   
}