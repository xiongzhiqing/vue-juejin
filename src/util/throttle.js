// export function throttle (fn, timeout = 10) {
//   let timer;
//   return function (...args) {
//     if (timer) {
//       timer = clearTimeout(timer);
//     }
//     timer = setTimeout(() => fn.apply(this, [...args]), timeout);
//   };
// }

/**
* @param { function } func 函数

* @param { number } wait 延迟执行毫秒数

* @param { number } type 1 表时间戳版，2 表定时器版
*/
export function throttle (func, wait = 10, type = 2) {
  let previous, timeout;
  if (type === 1) {
    previous = 0;
  } else if (type === 2) {
    timeout = null;
  }
  return function () {
    let context = this;
    let args = arguments;
    if (type === 1) {
      let now = Date.now();

      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args)
        }, wait)
      }
    }

  }
}

/**
* @param { function } func

* @param { number } wait 延迟执行毫秒数

* @param { boolean } immediate  true 表立即执行，false 表非立即执行
*/
export function debounce (func, wait = 200, immediate = false) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args)
    }
    else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait);
    }

  }
}
