import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'my-navbar',
  templateUrl: 'app/components/navbar/template.html',
  directives:[ROUTER_DIRECTIVES]
})

export class MyNavBar {

  @Input()
  defaultActive = "";

  constructor() {
    this.active = "";
  }

  activate(event) {
    this.active = event.target.parentElement.id;
  }

  isActive(id) {
    return this.active ? this.active === id : this.defaultActive === id;
  }
}
