"use strict";

System.register(["angular2/core", "angular2/common", "../../../model/album", "../../../service/artistManager", "angular2/router", "../../validators/yearValidator", "../../error/errorComponent"], function (_export, _context) {
  var Component, Injectable, Input, Output, EventEmitter, Control, FormBuilder, Validators, Album, ArtistManager, RouteParams, Router, YearValidator, Error, _createClass, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, AlbumComponent;

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
      Output = _angular2Core.Output;
      EventEmitter = _angular2Core.EventEmitter;
    }, function (_angular2Common) {
      Control = _angular2Common.Control;
      FormBuilder = _angular2Common.FormBuilder;
      Validators = _angular2Common.Validators;
    }, function (_modelAlbum) {
      Album = _modelAlbum.Album;
    }, function (_serviceArtistManager) {
      ArtistManager = _serviceArtistManager.ArtistManager;
    }, function (_angular2Router) {
      RouteParams = _angular2Router.RouteParams;
      Router = _angular2Router.Router;
    }, function (_validatorsYearValidator) {
      YearValidator = _validatorsYearValidator.default;
    }, function (_errorErrorComponent) {
      Error = _errorErrorComponent.default;
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

      _export("default", AlbumComponent = (_dec = Component({
        selector: 'album-form',
        templateUrl: 'app/components/album/edit/template.html',
        directives: [Error]
      }), _dec2 = Reflect.metadata('design:paramtypes', [Router, RouteParams, FormBuilder, ArtistManager]), _dec3 = Output(), _dec4 = Input(), _dec(_class = _dec2(_class = (_class2 = function () {
        function AlbumComponent(router, routeParams, formBuilder, am) {
          _classCallCheck(this, AlbumComponent);

          _initDefineProp(this, "updateEmitter", _descriptor, this);

          _initDefineProp(this, "album", _descriptor2, this);

          this.albums;
          this.am = am;
          this.router = router;
          this.routeParams = routeParams;
          this.formBuilder = formBuilder;
          this.albumForm = this.formBuilder.group({
            name: [this.album.name, Validators.required],
            year: [this.album.year, Validators.compose([Validators.required, YearValidator.after(2000)])]
          });
        }

        _createClass(AlbumComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.artistId = this.routeParams.get('id');
            var artist = this.am.get(this.artistId);

            if (artist && artist.albums) {
              this.albums = artist.albums;
            } else {
              this.albums = [];
            }
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {}
        }, {
          key: "addAlbum",
          value: function addAlbum() {
            this.album = new Album(this.albums.length + 1);
            this.albumForm.doValid = false;
          }
        }, {
          key: "saveAlbum",
          value: function saveAlbum() {
            this.albumForm.doValid = true;

            if (this.albumForm && this.albumForm.valid) {
              this.updateEmitter.next(this.album);
              this.album = new Album();
              this.albumForm.doValid = false;
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.albumForm.doValid = false;
            this.album = new Album();
          }
        }, {
          key: "returnBack",
          value: function returnBack() {
            this.router.navigate(['Home']);
          }
        }]);

        return AlbumComponent;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "updateEmitter", [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return new EventEmitter();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "album", [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return new Album();
        }
      })), _class2)) || _class) || _class));

      _export("default", AlbumComponent);
    }
  };
});