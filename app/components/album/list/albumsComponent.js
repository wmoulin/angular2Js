'use strict';

System.register(['angular2/core', '../../../model/artist', '../../../service/artistManager', 'angular2/router'], function (_export, _context) {
  var Component, Output, EventEmitter, Artist, ArtistManager, RouteParams, _createClass, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, AlbumsComponent;

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
      Output = _angular2Core.Output;
      EventEmitter = _angular2Core.EventEmitter;
    }, function (_modelArtist) {
      Artist = _modelArtist.Artist;
    }, function (_serviceArtistManager) {
      ArtistManager = _serviceArtistManager.ArtistManager;
    }, function (_angular2Router) {
      RouteParams = _angular2Router.RouteParams;
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

      _export('default', AlbumsComponent = (_dec = Component({
        selector: 'album-list',
        templateUrl: "app/components/album/list/template.html"
      }), _dec2 = Reflect.metadata('design:paramtypes', [RouteParams, ArtistManager]), _dec3 = Output(), _dec(_class = _dec2(_class = (_class2 = function () {
        function AlbumsComponent(routeParams, am) {
          _classCallCheck(this, AlbumsComponent);

          _initDefineProp(this, 'selectEmitter', _descriptor, this);

          this.albums;
          this.selectedAlbum;
          this.am = am;
          this.routeParams = routeParams;
        }

        _createClass(AlbumsComponent, [{
          key: 'remove',
          value: function remove(album) {
            this.am.removeAlbum(this.artistId, album.id);
            var artist = this.am.get(this.artistId);

            if (artist && artist.albums) {
              this.albums = artist.albums;
            } else {
              this.albums = [];
            }
          }
        }, {
          key: 'onSelect',
          value: function onSelect(album) {
            if (this.selectedAlbum && this.selectedAlbum.id === album.id) {
              this.selectedAlbum = undefined;
            } else {
              this.selectedAlbum = album;
            }

            this.selectEmitter.next(this.selectedAlbum);
          }
        }, {
          key: 'ngOnInit',
          value: function ngOnInit() {
            this.artistId = this.routeParams.get('id');
            var artist = this.am.get(this.artistId);

            if (artist && artist.albums) {
              this.albums = artist.albums;
            } else {
              this.albums = [];
            }
          }
        }]);

        return AlbumsComponent;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'selectEmitter', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return new EventEmitter();
        }
      })), _class2)) || _class) || _class));

      _export('default', AlbumsComponent);
    }
  };
});