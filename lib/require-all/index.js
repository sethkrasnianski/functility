const { readdirSync } = require('fs');
const { resolve } = require('path');

module.exports = function(location) {
  const rootPath = resolve(getCallerDirectory(), location);
  return readdirSync(rootPath)
    .filter(function(file) {
      return (file.indexOf('.') !== 0) && (file.indexOf('index.') < 0);
    })
    .reduce(function(acc, file) {
      const fileType = '.js';

      if (file.indexOf('.coffee') > 1) {
        fileType = '.coffee';
      }

      const module = file.substr(0, file.indexOf(fileType));
      acc[module] = require(rootPath + '/' + file);
      return acc;
    }, {});
};

function getCallerDirectory() {
  return `/${getStack()[2].getFileName().split('/').slice(1, -1).join('/')}`;
}

function getStack() {
  // Save original Error.prepareStackTrace
  const origPrepareStackTrace = Error.prepareStackTrace

  // Override with function that just returns `stack`
  Error.prepareStackTrace = function (_, stack) {
    return stack
  }

  // Create a new `Error`, which automatically gets `stack`
  const err = new Error()

  // Evaluate `err.stack`, which calls our new `Error.prepareStackTrace`
  const stack = err.stack

  // Restore original `Error.prepareStackTrace`
  Error.prepareStackTrace = origPrepareStackTrace

  // Remove superfluous function call on stack
  stack.shift() // getStack --> Error

  return stack
}
