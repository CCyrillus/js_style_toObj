'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString
    .split(';')
    .map(string => string.split(':').map(elem => elem.trim()))
    .filter(value => value.length > 1)
    .forEach(element => {
      obj[element[0]] = element[1];
    });

  return obj;
}

module.exports = convertToObject;
