'use strict';

System.register(['angular2/core', '../../../model/artist', '../../../service/artistManager', 'angular2/router'], function (_export, _context) {
  var Component, Artist, ArtistManager, Router, _createClass, _dec, _dec2, _class, List;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_angular2Core) {
      Component = _angular2Core.Component;
    }, function (_modelArtist) {
      Artist = _modelArtist.Artist;
    }, function (_serviceArtistManager) {
      ArtistManager = _serviceArtistManager.ArtistManager;
    }, function (_angular2Router) {
      Router = _angular2Router.Router;
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

      _export('List', List = (_dec = Component({
        selector: 'artist-list',
        templateUrl: "app/components/artist/list/template.html"
      }), _dec2 = Reflect.metadata('design:paramtypes', [Router, ArtistManager]), _dec(_class = _dec2(_class = function () {
        function List(router, am) {
          _classCallCheck(this, List);

          this.am = am;
          this.artists = am.artists;
          this.selectedArtist;
          this.router = router;
        }

        _createClass(List, [{
          key: 'removeArtist',
          value: function removeArtist(artist) {
            this.am.remove(artist);
          }
        }, {
          key: 'onSelect',
          value: function onSelect(artist) {
            this.selectedArtist = artist;
          }
        }, {
          key: 'edit',
          value: function edit(artist) {
            this.router.navigate(['Artist', {
              id: artist.id
            }]);
          }
        }]);

        return List;
      }()) || _class) || _class));

      _export('List', List);
    }
  };
});