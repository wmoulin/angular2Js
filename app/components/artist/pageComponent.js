'use strict';

System.register(['angular2/core', 'angular2/router', './edit/artistComponent', './list/artistsComponent'], function (_export, _context) {
  var Input, Component, RouteData, RouteParams, Form, List, _dec, _dec2, _class, Home;

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
      RouteData = _angular2Router.RouteData;
      RouteParams = _angular2Router.RouteParams;
    }, function (_editArtistComponent) {
      Form = _editArtistComponent.Form;
    }, function (_listArtistsComponent) {
      List = _listArtistsComponent.List;
    }],
    execute: function () {
      _export('Home', Home = (_dec = Component({
        selector: 'artist-page',
        template: '<h2>{{title}}</h2><my-form placeHolder="enter name"></my-form>\n  <artist-list></artist-list>',
        directives: [Form, List]
      }), _dec2 = Reflect.metadata('design:paramtypes', [RouteParams, RouteData]), _dec(_class = _dec2(_class = function Home(params, data) {
        _classCallCheck(this, Home);

        this.title = data.get('title');
      }) || _class) || _class));

      _export('Home', Home);
    }
  };
});