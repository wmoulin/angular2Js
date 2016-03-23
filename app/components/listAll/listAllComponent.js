'use strict';

System.register(['angular2/core', '../../service/artistManager'], function (_export, _context) {
  var Component, ArtistManager, _dec, _dec2, _class, ListAll;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_angular2Core) {
      Component = _angular2Core.Component;
    }, function (_serviceArtistManager) {
      ArtistManager = _serviceArtistManager.ArtistManager;
    }],
    execute: function () {
      _export('ListAll', ListAll = (_dec = Component({
        selector: 'artists-list',
        templateUrl: "app/components/listall/template.html"
      }), _dec2 = Reflect.metadata('design:paramtypes', [ArtistManager]), _dec(_class = _dec2(_class = function ListAll(am) {
        _classCallCheck(this, ListAll);

        this.am = am;
        this.artists = am.artists;
      }) || _class) || _class));

      _export('ListAll', ListAll);
    }
  };
});