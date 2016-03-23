'use strict';

System.register(['angular2/core', 'angular2/router'], function (_export, _context) {
  var Component, Input, ROUTER_DIRECTIVES, _createClass, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, MyNavBar;

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
    }, function (_angular2Router) {
      ROUTER_DIRECTIVES = _angular2Router.ROUTER_DIRECTIVES;
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

      _export('MyNavBar', MyNavBar = (_dec = Component({
        selector: 'my-navbar',
        templateUrl: 'app/components/navbar/template.html',
        directives: [ROUTER_DIRECTIVES]
      }), _dec2 = Input(), _dec(_class = (_class2 = function () {
        function MyNavBar() {
          _classCallCheck(this, MyNavBar);

          _initDefineProp(this, 'defaultActive', _descriptor, this);

          this.active = "";
        }

        _createClass(MyNavBar, [{
          key: 'activate',
          value: function activate(event) {
            this.active = event.target.parentElement.id;
          }
        }, {
          key: 'isActive',
          value: function isActive(id) {
            return this.active ? this.active === id : this.defaultActive === id;
          }
        }]);

        return MyNavBar;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'defaultActive', [_dec2], {
        enumerable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      _export('MyNavBar', MyNavBar);
    }
  };
});