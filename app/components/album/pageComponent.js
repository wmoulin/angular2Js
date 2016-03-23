'use strict';

System.register(['angular2/core', 'angular2/router', './edit/albumComponent', './list/albumsComponent', '../../service/artistManager', '../../model/album'], function (_export, _context) {
  var Input, Component, RouteParams, Form, List, ArtistManager, Album, _createClass, _dec, _dec2, _class, Page;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_angular2Core) {
      Input = _angular2Core.Input;
      Component = _angular2Core.Component;
    }, function (_angular2Router) {
      RouteParams = _angular2Router.RouteParams;
    }, function (_editAlbumComponent) {
      Form = _editAlbumComponent.default;
    }, function (_listAlbumsComponent) {
      List = _listAlbumsComponent.default;
    }, function (_serviceArtistManager) {
      ArtistManager = _serviceArtistManager.ArtistManager;
    }, function (_modelAlbum) {
      Album = _modelAlbum.Album;
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

      _export('default', Page = (_dec = Component({
        template: '<album-form (updateEmitter)="saveAlbum($event)" [album]="album"></album-form>\n  <album-list (selectEmitter)="selectAlbum($event)"></album-list>',
        directives: [Form, List]
      }), _dec2 = Reflect.metadata('design:paramtypes', [RouteParams, ArtistManager]), _dec(_class = _dec2(_class = function () {
        function Page(routeParams, am) {
          _classCallCheck(this, Page);

          this.am = am;
          this.routeParams = routeParams;
          this.album = new Album();
        }

        _createClass(Page, [{
          key: 'saveAlbum',
          value: function saveAlbum(album) {
            var _this = this;

            var newer = this.artist.albums.every(function (element, index) {
              if (element.id === album.id) {
                _this.artist.albums[index] = _this.album;
                return false;
              }

              return true;
            });

            if (newer || this.artist.albums.length == 0) {
              this.artist.albums.push(album);
            }
          }
        }, {
          key: 'selectAlbum',
          value: function selectAlbum(album) {
            if (album) {
              this.album = album;
            } else {
              this.album = new Album();
            }
          }
        }, {
          key: 'ngOnInit',
          value: function ngOnInit() {
            this.artistId = this.routeParams.get('id');
            this.artist = this.am.get(this.artistId);
          }
        }, {
          key: 'ngOnDestroy',
          value: function ngOnDestroy() {
            this.am.saveAlbums(this.artist.id, this.artist.albums);
          }
        }]);

        return Page;
      }()) || _class) || _class));

      _export('default', Page);
    }
  };
});