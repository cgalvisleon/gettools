"use strict";

var emptyValue = function emptyValue(data, fieldName, _default) {
  if (data === undefined || data === null) {
    return _default;
  } else if (data[fieldName] === undefined || data[fieldName] === null || data[fieldName] === "" || Object.keys(data[fieldName]).length === 0) {
    return _default;
  } else {
    return data[fieldName];
  }
};

var getValue = function getValue(data, fieldName, _default) {
  if (data === undefined || data === null) {
    return _default;
  } else if (data[fieldName] === undefined || data[fieldName] === null) {
    return _default;
  } else {
    return data[fieldName];
  }
};

var getData = function getData(result, fieldName, _default) {
  var data = getValue(result, "_data", {});
  return getValue(data, fieldName, _default);
};

var getStringify = function getStringify(data, fieldName, _default) {
  _default = _default || [];
  var result = "";
  if (data === undefined || data === null) {
    result = _default;
  } else if (data[fieldName] === undefined || data[fieldName] === null) {
    result = _default;
  } else {
    result = data[fieldName];
  }
  return JSON.stringify(result);
};

var getArray = function getArray(data, fieldName) {
  if (data === undefined || data === null) {
    return "[]";
  } else if (data[fieldName] === undefined || data[fieldName] === null) {
    return "[]";
  } else {
    var result = data[fieldName];
    return "'" + result + "'";
  }
};

var getItem = function getItem(list, index) {
  if (list === undefined) {
    return {};
  } else if (list[index] === undefined) {
    return {};
  } else {
    return list[index];
  }
};

var getRow = function getRow(list, index, fieldName, _default) {
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
  emptyValue: emptyValue,
  getValue: getValue,
  getData: getData,
  getStringify: getStringify,
  getArray: getArray,
  getItem: getItem,
  getRow: getRow
};