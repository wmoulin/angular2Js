'use strict';

System.register(['angular2/platform/browser', 'angular2/router', './app.component', './service/artistManager', 'angular2/http'], function (_export, _context) {
  var bootstrap, ROUTER_PROVIDERS, AppComponent, ArtistManager, HTTP_PROVIDERS;
  return {
    setters: [function (_angular2PlatformBrowser) {
      bootstrap = _angular2PlatformBrowser.bootstrap;
    }, function (_angular2Router) {
      ROUTER_PROVIDERS = _angular2Router.ROUTER_PROVIDERS;
    }, function (_appComponent) {
      AppComponent = _appComponent.AppComponent;
    }, function (_serviceArtistManager) {
      ArtistManager = _serviceArtistManager.ArtistManager;
    }, function (_angular2Http) {
      HTTP_PROVIDERS = _angular2Http.HTTP_PROVIDERS;
    }],
    execute: function () {
      bootstrap(AppComponent, [ArtistManager, ROUTER_PROVIDERS, HTTP_PROVIDERS]);
    }
  };
});