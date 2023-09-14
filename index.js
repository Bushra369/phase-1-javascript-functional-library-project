
function isArray(collection) {
  return Array.isArray(collection);
}

function isObject(collection) {
  return typeof collection === 'object' && !isArray(collection) && collection !== null;
}

function myEach(collection, callback) {
  if (isArray(collection) || isObject(collection)) {
    const values = isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      callback(values[i]);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  if (isArray(collection) || isObject(collection)) {
    const values = isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
      result.push(callback(values[i], i));
    }
    return result;
  }
  return [];
}

function myReduce(collection, callback, acc) {
  if (isArray(collection) || isObject(collection)) {
    const values = isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;
    if (acc === undefined) {
      acc = values[0];
      startIndex = 1;
    }
    for (let i = startIndex; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
    return acc;
  }
  return undefined;
}

function myFind(collection, predicate) {
  if (isArray(collection) || isObject(collection)) {
    const values = isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        return values[i];
      }
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  if (isArray(collection) || isObject(collection)) {
    const values = isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        result.push(values[i]);
      }
    }
    return result;
  }
  return [];
}

function mySize(collection) {
  if (isArray(collection) || isObject(collection)) {
    const values = isArray(collection) ? collection : Object.values(collection);
    return values.length;
  }
  return 0;
}

function myFirst(array, n) {
  if (isArray(array)) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  return undefined;
}

function myLast(array, n) {
  if (isArray(array)) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  return undefined;
}

function myKeys(object) {
  if (isObject(object)) {
    return Object.keys(object);
  }
  return [];
}

function myValues(object) {
  if (isObject(object)) {
    return Object.values(object);
  }
  return [];
}

