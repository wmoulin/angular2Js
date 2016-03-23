'use strict';

System.register(['angular2/core'], function (_export, _context) {
  var Component, Input, _createClass, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, ErrorComponent;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_angular2Core) {
      Component = _angular2Core.Component;
      Input = _angular2Core.Input;
    }],
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

      _export('default', ErrorComponent = (_dec = Component({
        selector: 'error',
        templateUrl: 'app/components/error/template.html'
      }), _dec2 = Input(), _dec3 = Input(), _dec(_class = (_class2 = function () {
        function ErrorComponent() {
          _classCallCheck(this, ErrorComponent);

          _initDefineProp(this, 'form', _descriptor, this);

          _initDefineProp(this, 'controlName', _descriptor2, this);

          this.messages = {
            required: "Required",
            yearAfter: "Must be greater than "
          };
          this.invalidMessages = [];
        }

        _createClass(ErrorComponent, [{
          key: 'errorsMessage',
          get: function get() {
            this.invalidMessages.length = 0;

            if (this.form && this.form.doValid) {
              this.form._touched = false;

              if (this.controlName && this.form.controls[this.controlName] && this.form.controls[this.controlName].errors) {
                for (var errorName in this.form.controls[this.controlName].errors) {
                  this.invalidMessages.push(this.controlName + " : " + this.messages[errorName] + controls[controleName].errors[errorName] === true ? "" : controls[controleName].errors[errorName]);
                }
              } else if (!this.form.valid) {
                var _controls = this.form.controls;

                for (var _controleName in _controls) {
                  if (_controls[_controleName].errors) {
                    for (var errorName in _controls[_controleName].errors) {
                      this.invalidMessages.push(_controleName + " : " + this.messages[errorName] + (_controls[_controleName].errors[errorName] === true ? "" : _controls[_controleName].errors[errorName]));
                    }
                  }
                }
              }
            }

            return this.invalidMessages;
          }
        }]);

        return ErrorComponent;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'form', [_dec2], {
        enumerable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'controlName', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      _export('default', ErrorComponent);
    }
  };
});