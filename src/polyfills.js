if (!Promise.try) {
  Promise.try = (fn, ...args) =>
    new Promise((resolve) => {
      resolve(fn(...args));
    });
}

if (!Promise.withResolvers) {
  Promise.withResolvers = () => {
    let resolve;
    let reject;
    const promise = new Promise((promiseResolve, promiseReject) => {
      resolve = promiseResolve;
      reject = promiseReject;
    });
    return { promise, resolve, reject };
  };
}
