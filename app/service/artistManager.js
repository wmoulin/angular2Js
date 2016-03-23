"use strict";

System.register(["../model/artist"], function (_export, _context) {
  var Artist, _createClass, ArtistManager;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_modelArtist) {
      Artist = _modelArtist.Artist;
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

      _export("ArtistManager", ArtistManager = function () {
        function ArtistManager() {
          _classCallCheck(this, ArtistManager);

          this.artists = [];
          this.init();
        }

        _createClass(ArtistManager, [{
          key: "add",
          value: function add(artist) {
            this.artists.push(artist);
            this.save(this.artists);
          }
        }, {
          key: "get",
          value: function get(id) {
            var artists = this.artists.filter(function (element) {
              return element.id === id;
            });
            return artists && artists.length > 0 ? artists[0] : undefined;
          }
        }, {
          key: "save",
          value: function save(artists) {
            localStorage.setItem("artists", JSON.stringify(this.artists));
          }
        }, {
          key: "saveArtist",
          value: function saveArtist(artist) {
            var artists = this.artists.filter(function (element) {
              return element === artist.id;
            });
            artists.push(artist);
            this.artists = artists;
            this.save(this.artists);
          }
        }, {
          key: "saveAlbums",
          value: function saveAlbums(id, albums) {
            var _this = this;

            this.artists.forEach(function (artist, index) {
              if (artist.id === id) {
                _this.artists[index].albums = albums;
                return false;
              }
            });
          }
        }, {
          key: "removeAlbum",
          value: function removeAlbum(id, albumId) {
            var _this2 = this;

            this.artists.forEach(function (artist, index) {
              if (artist.id === id) {
                _this2.artists[index].albums = _this2.artists[index].albums.filter(function (album) {
                  album.id !== albumId;
                });
                return false;
              }
            });
          }
        }, {
          key: "remove",
          value: function remove(artist) {
            this.artists.splice(this.artists.indexOf(artist), 1);
            this.save(this.artists);
          }
        }, {
          key: "init",
          value: function init() {
            this.artists = JSON.parse(localStorage.getItem("artists")) || [];

            if (!this.artists || !Array.isArray(this.artists) || this.artists.length == 0) {
              this.artists = [new Artist(new Date().getMilliseconds(), "U2")];
            }
          }
        }]);

        return ArtistManager;
      }());

      _export("ArtistManager", ArtistManager);
    }
  };
});