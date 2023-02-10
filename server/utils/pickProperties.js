const pickProperties = (values, keys) => {
  return keys.reduce((obj, key) => {
    if (values && Object.prototype.hasOwnProperty.call(values, key)) {
      obj[key] = values[key];
    }
    return obj;
  }, {});
};

module.exports = pickProperties;
