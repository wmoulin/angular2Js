import {Component, Injectable, Input} from 'angular2/core';
import {Artist} from '../../../model/artist';
import {ArtistManager} from '../../../service/artistManager';

@Component({
  selector: 'my-form',
  templateUrl: 'app/components/artist/edit/template.html'
})
@Injectable()
@Reflect.metadata('design:paramtypes', [ArtistManager])
export class Form {

  // in place @Attribut on constructor parameter
  @Input()
  placeHolder = "";

  constructor(am) {
    this.artist = new Artist();
    this.am = am;
  }

  addArtist(artist) {
    this.am.add(artist);
    this.artist = new Artist();
  }
}
