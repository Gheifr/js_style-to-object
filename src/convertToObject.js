'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringArr = sourceString.split(';');

  stringArr.filter((val) => val !== '');

  const result = {};

  for (let val of stringArr) {
    val = val.replaceAll('\n', '').trim();

    if (val.length === 0) {
      continue;
    }

    const k = val.split(':')[0].trim();
    let v = val.split(':')[1].trim();

    if (v.includes(',')) {
      v = v.replaceAll(',', ',\n');
    }

    result[k] = `${v}`;
  }

  return result;
}

module.exports = convertToObject;
