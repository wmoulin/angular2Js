"use strict";

System.register([], function (_export, _context) {
  var _createClass, YearValidator;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export("default", YearValidator = function () {
        function YearValidator() {
          _classCallCheck(this, YearValidator);
        }

        _createClass(YearValidator, null, [{
          key: "after",
          value: function after(year) {
            return function (control) {
              if (control.value && !isNaN(control.value) && control.value > year) {
                return null;
              }

              return {
                yearAfter: year
              };
            };
          }
        }]);

        return YearValidator;
      }());

      _export("default", YearValidator);
    }
  };
});