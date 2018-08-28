/**
 * 判断对象是否存在
 * @param {*} obj 
 */
export const isPresent = (obj) => {
  return typeof obj !== 'undefined' && obj !== null;
};

/**
 * 判断是否为空白
 * @param {*} obj 
 */
export const isBlank = (obj) => {
  return typeof obj === 'undefined' || obj === null;
};

/**
 * 判断是否为boolean类型
 * @param {*} obj 
 */
export const isBoolean = (obj) => {
  return typeof obj === 'boolean';
};

/**
 * 判断是否为number类型
 * @param {*} obj 
 */
export const isNumber = (obj) => {
  return typeof obj === 'number';
};

/**
 * 判断是否为字符串类型
 * @param {*} obj 
 */
export const isString = (obj) => {
  return typeof obj === 'string';
};

/**
 * 判断是否为数组类型
 * @param {*} obj 
 */
export const isArray = (obj) => {
  return Array.isArray(obj) || Object.prototype.toString.call(obj) === '[object Array]';
};

/**
 * 判断是否为日期类型
 * @param {*} obj 
 */
export const isDate = (obj) => {
  return obj instanceof Date && !isNaN(obj.valueOf());
};

/**
 * 判断是否为function类型
 * @param {*} obj 
 */
export const isFunction = (obj) => {
  return typeof obj === 'function';
};

/**
 * 判断是否为js对象
 * @param {*} obj 
 */
export const isJsObject = (obj) => {
  return obj !== null && (isFunction(obj) || typeof obj === 'object');
};

export const isPromise = (obj) => {
  return isPresent(obj) && isFunction(obj.then);
};

/**
 * 判断是否为空
 * @param {*} obj 
 */
export const isEmpty = (obj) => {
  if (isBlank(obj)) {
    return true;
  }

  if (obj.length === 0) {
    return true;
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
};

/**
 * 判断是否为标准格式空
 * @param {*} obj 
 */
export const normalizeBlank = (obj) => {
  return isBlank(obj) ? null : obj;
};

/**
 * 判断是否为标准格式布尔值
 * @param {*} obj 
 */
export const normalizeBool = (obj) => {
  return isBlank(obj) ? false : obj;
};

export const stringify = (token) => {
  if (isString(token)) {
    return token;
  }

  if (isBlank(token)) {
    return String(token);
  }

  const ret = token.toString();
  const newLineIndex = ret.indexOf('\n');
  return (newLineIndex === -1) ? ret : ret.substring(0, newLineIndex);
};

export class PromiseWrapper {
  // Excutes promises one by one, e.g.
  // const promise = () => new Promise(...)
  // const promise2 = () => new Promise(...)
  // sequentialize([ promise, promise2 ])
  static sequentialize = promiseFactories => {
    let chain = Promise.resolve();
    promiseFactories.forEach(factory => {
      chain = chain.then(factory);
    });
    return chain;
  }

  // Promise finally util similar to Q.finally
  // e.g. finally(promise.then(...))
  /* eslint-disable consistent-return */
  static finally = (promise, cb) => promise.then(res => {
    const otherPromise = cb();
    if (typeof otherPromise.then === 'function') {
      return otherPromise.then(() => res);
    }
  }, reason => {
    const otherPromise = cb();
    if (typeof otherPromise.then === 'function') {
      return otherPromise.then(() => {
        throw reason;
      });
    }
    throw reason;
  })
}
/* eslint-enable consistent-return */

export class StringWrapper {
  static equals = (s1, s2) => s1 === s2;

  static contains = (s, substr) => s.indexOf(substr) !== -1;

  static compare = (a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }

    return 0;
  }
}

/* eslint-disable max-params */
export class DateWrapper {
  static create(
    year,
    month = 1,
    day = 1,
    hour = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0
  ) {
    return new Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
  }

  static fromISOString(str) {
    return new Date(str);
  }

  static fromMillis(ms) {
    return new Date(ms);
  }

  static toMillis(date) {
    return date.getTime();
  }

  static now() {
    return Date.now() || new Date();
  }

  static toJson(date) {
    return date.toJSON();
  }
}
/* eslint-enable max-params */