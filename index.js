"use strict";

var fs          = require("fs")
  , path        = require("path")

var require_all = function(location) {
  var modules  = {};
  fs
    .readdirSync(location)
    .filter(function(file) {
      return (file.indexOf(".") !== 0) && (file.indexOf("index.") == -1);
    })
    .forEach(function(file) {
      var fileType = ".js";
      if(file.indexOf('.coffee') > -1) fileType = ".coffee";

      var module = file.substr(0, file.indexOf(fileType));
      modules[module] = require(location + "/" + file);
    });

  return modules;
};

module.exports = {

  require_all: require_all,
  crypt: require_all(__dirname + '/lib/crypt')

};
