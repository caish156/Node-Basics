module.exports.database = {
  MODELS: {
    USER: "User",
    ROLE: "Role",
  },
  COLUMNS: {
    ID_COLUMN: "id",
    USER_ID: "user_id",
    ACTIVE: "active",
    CREATED_AT_COLUMN: "createdAt",
    UPDATED_AT_COLUMN: "updatedAt",
    DELETED_AT_COLUMN: "deleted_at",
    CREATED_BY_COLUMN: "created_by",
    UPDATED_BY_COLUMN: "updated_by",
    DELETED_BY_COLUMN: "deleted_by",
    PASSWORD: "password",
    USER: {
      EMAIL: "email",
      FIRST_NAME: "first_name",
      LAST_NAME: "last_name",
      PHONE: "phone",
      ROLE_ID: "role_id",
      FILE_NAME: "file_name",
      TWILIO_PHONE: "twilio_phone",
    },
    ROLE: {
      ROLE_ID: "role_id",
      NAME: "name",
    },
  },
  LOGIC: {
    AND: "and",
    OR: "or",
  },

  POSTGRES: "postgres",
};
