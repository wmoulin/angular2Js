'use strict';

System.register(['angular2/core', '../../../model/artist', '../../../service/artistManager'], function (_export, _context) {
  var Component, Injectable, Input, Artist, ArtistManager, _createClass, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, Form;

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
      Injectable = _angular2Core.Injectable;
      Input = _angular2Core.Input;
    }, function (_modelArtist) {
      Artist = _modelArtist.Artist;
    }, function (_serviceArtistManager) {
      ArtistManager = _serviceArtistManager.ArtistManager;
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

      _export('Form', Form = (_dec = Component({
        selector: 'my-form',
        templateUrl: 'app/components/artist/edit/template.html'
      }), _dec2 = Injectable(), _dec3 = Reflect.metadata('design:paramtypes', [ArtistManager]), _dec4 = Input(), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function Form(am) {
          _classCallCheck(this, Form);

          _initDefineProp(this, 'placeHolder', _descriptor, this);

          this.artist = new Artist();
          this.am = am;
        }

        _createClass(Form, [{
          key: 'addArtist',
          value: function addArtist(artist) {
            this.am.add(artist);
            this.artist = new Artist();
          }
        }]);

        return Form;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'placeHolder', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class) || _class) || _class));

      _export('Form', Form);
    }
  };
});