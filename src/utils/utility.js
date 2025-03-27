module.exports.deleteObjectKeys = (obj, keys) => {
  keys.map((key) => delete obj[key]);
};
