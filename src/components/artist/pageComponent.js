import {Input, Component} from 'angular2/core';
import {RouteData, RouteParams} from 'angular2/router';
import {Form} from './edit/artistComponent';
import {List} from './list/artistsComponent';

@Component({
  selector: 'artist-page',
  template:`<h2>{{title}}</h2><my-form placeHolder="enter name"></my-form>
  <artist-list></artist-list>`,
  directives: [Form, List]
})
@Reflect.metadata('design:paramtypes', [RouteParams, RouteData])
export class Home {

  constructor(params, data) {
    this.title = data.get('title');
  }
}
