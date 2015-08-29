var fs = require('fs');

module.exports = function(location) {
  var modules  = {};

  fs
    .readdirSync(location)
    .filter(function(file) {
      return (file.indexOf('.') !== 0) && (file.indexOf('index.') < 0);
    })
    .forEach(function(file) {
      var fileType = '.js';
      if (file.indexOf('.coffee') > 1) fileType = '.coffee';

      var module = file.substr(0, file.indexOf(fileType));
      modules[module] = require(location + '/' + file);
    });

  return modules;
};
