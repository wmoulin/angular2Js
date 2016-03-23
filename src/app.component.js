import {Component} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListAll} from './components/listall/listAllComponent';
import {Home} from './components/artist/pageComponent';
import {MyNavBar} from './components/navbar/navbarComponent';
import AlbumComponent from './components/album/pageComponent'

@Component({
  selector: 'my-app',
    template:`<h2>{{title}}</h2>
  <my-navbar defaultActive="home"></my-navbar>
  <router-outlet></router-outlet>`,
  directives:[MyNavBar, ROUTER_DIRECTIVES]
})
@RouteConfig([
  new Route({path:'/', component: Home, name: 'Home', data: {title: "List of artists"}}),
  new Route({path:'/all', component: ListAll, name: 'ListAll'}),
  new Route({path:'/artist/:id', name: 'Artist',   component: AlbumComponent})
])
export class AppComponent {

  constructor(){
    this.title = 'Angular 2 With ES6';
  }
}
