module.exports.regex = {
  NAME: /^(?:\s*[a-zA-Z]+\s*)*$/,
  US_PHONE: /^[1-9][0-9]{9}$/,
  US_ZIP_CODE: /^\d{5}$/,
  DRIVER_LICENCE: /^[a-zA-Z0-9]+$/,
  URL: /(https?|ftp):\/\/[^\s/$.?#].[^\s]*|www\.[^\s/$.?#].[^\s]*/g,
  ADF: /<adf>(.*?)<\/adf>/s,
  ADF_EMAIL: /^(\d+)-(\d+)@.+$/,
  INCOMING_TO_EMAIL: /<([^>]+)>/,
};
