'use strict';

System.register(['angular2/core', 'angular2/router', './components/listall/listAllComponent', './components/artist/pageComponent', './components/navbar/navbarComponent', './components/album/pageComponent'], function (_export, _context) {
  var Component, Route, RouteConfig, ROUTER_DIRECTIVES, ListAll, Home, MyNavBar, AlbumComponent, _dec, _dec2, _class, AppComponent;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_angular2Core) {
      Component = _angular2Core.Component;
    }, function (_angular2Router) {
      Route = _angular2Router.Route;
      RouteConfig = _angular2Router.RouteConfig;
      ROUTER_DIRECTIVES = _angular2Router.ROUTER_DIRECTIVES;
    }, function (_componentsListallListAllComponent) {
      ListAll = _componentsListallListAllComponent.ListAll;
    }, function (_componentsArtistPageComponent) {
      Home = _componentsArtistPageComponent.Home;
    }, function (_componentsNavbarNavbarComponent) {
      MyNavBar = _componentsNavbarNavbarComponent.MyNavBar;
    }, function (_componentsAlbumPageComponent) {
      AlbumComponent = _componentsAlbumPageComponent.default;
    }],
    execute: function () {
      _export('AppComponent', AppComponent = (_dec = Component({
        selector: 'my-app',
        template: '<h2>{{title}}</h2>\n  <my-navbar defaultActive="home"></my-navbar>\n  <router-outlet></router-outlet>',
        directives: [MyNavBar, ROUTER_DIRECTIVES]
      }), _dec2 = RouteConfig([new Route({
        path: '/',
        component: Home,
        name: 'Home',
        data: {
          title: "List of artists"
        }
      }), new Route({
        path: '/all',
        component: ListAll,
        name: 'ListAll'
      }), new Route({
        path: '/artist/:id',
        name: 'Artist',
        component: AlbumComponent
      })]), _dec(_class = _dec2(_class = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Angular 2 With ES6';
      }) || _class) || _class));

      _export('AppComponent', AppComponent);
    }
  };
});