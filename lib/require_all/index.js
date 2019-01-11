const fs = require('fs');

module.exports = function(location) {
  const modules  = {};

  fs
    .readdirSync(location)
    .filter(function(file) {
      return (file.indexOf('.') !== 0) && (file.indexOf('index.') < 0);
    })
    .forEach(function(file) {
      const fileType = '.js';

      if (file.indexOf('.coffee') > 1) {
        fileType = '.coffee';
      }

      const module = file.substr(0, file.indexOf(fileType));
      modules[module] = require(location + '/' + file);
    });

  return modules;
};
