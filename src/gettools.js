const emptyValue = function (data, fieldName, _default) {
  if (data === undefined || data === null) {
    return _default;
  } else if (
    data[fieldName] === undefined ||
    data[fieldName] === null ||
    data[fieldName] === "" ||
    Object.keys(data[fieldName]).length === 0
  ) {
    return _default;
  } else {
    return data[fieldName];
  }
};

const getValue = function (data, fieldName, _default) {
  if (data === undefined || data === null) {
    return _default;
  } else if (data[fieldName] === undefined || data[fieldName] === null) {
    return _default;
  } else {
    return data[fieldName];
  }
};

const getData = function (result, fieldName, _default) {
  const data = getValue(result, "_data", {});
  return getValue(data, fieldName, _default);
};

const getStringify = function (data, fieldName, _default) {
  _default = _default || [];
  let result = "";
  if (data === undefined || data === null) {
    result = _default;
  } else if (data[fieldName] === undefined || data[fieldName] === null) {
    result = _default;
  } else {
    result = data[fieldName];
  }
  return JSON.stringify(result);
};

const getArray = function (data, fieldName) {
  if (data === undefined || data === null) {
    return "[]";
  } else if (data[fieldName] === undefined || data[fieldName] === null) {
    return "[]";
  } else {
    const result = data[fieldName];
    return `'${result}'`;
  }
};

const getItem = function (list, index) {
  if (list === undefined) {
    return {};
  } else if (list[index] === undefined) {
    return {};
  } else {
    return list[index];
  }
};

const getRow = function (list, index, fieldName, _default) {
  if (list === undefined) {
    return _default;
  } else if (list[index] === undefined) {
    return _default;
  } else if (list[index][fieldName] === undefined) {
    return _default;
  } else if (list[index][fieldName] === null) {
    return _default;
  } else {
    return list[index][fieldName];
  }
};

module.exports = {
  emptyValue,
  getValue,
  getData,
  getStringify,
  getArray,
  getItem,
  getRow,
};
