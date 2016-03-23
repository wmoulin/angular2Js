import {Component} from 'angular2/core';
import {ArtistManager} from '../../service/artistManager';

@Component({
  selector: 'artists-list',
  templateUrl: "app/components/listall/template.html",
})
@Reflect.metadata('design:paramtypes', [ ArtistManager])
export class ListAll {

  constructor(am) {
    this.am = am;
    this.artists = am.artists;
  }

}
