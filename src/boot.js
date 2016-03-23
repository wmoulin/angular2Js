import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component'
import {ArtistManager} from './service/artistManager';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent,[ArtistManager,ROUTER_PROVIDERS, HTTP_PROVIDERS]);
