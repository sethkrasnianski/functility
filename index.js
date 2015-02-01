"use strict";

var fs          = require("fs")
  , path        = require("path")

module.exports = {

  require_all: function(location) {
    var modules  = {};
    fs
      .readdirSync(location)
      .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
      })
      .forEach(function(file) {
        var module = file.substr(0, file.indexOf('.js'));
        modules[module] = require(location + "/" + file);
      });

    return modules;
  }

};
