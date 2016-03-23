import {Component} from 'angular2/core';
import {Artist} from '../../../model/artist';
import {ArtistManager} from '../../../service/artistManager';
import {Router} from 'angular2/router';

@Component({
  selector: 'artist-list',
  templateUrl:"app/components/artist/list/template.html"
})
@Reflect.metadata('design:paramtypes', [Router, ArtistManager])
export class List {

  constructor(router, am){
    this.am = am;
    this.artists = am.artists;
    this.selectedArtist;
    this.router = router;
  }

  removeArtist(artist) {
    this.am.remove(artist);
  }

  onSelect(artist) {
    this.selectedArtist = artist;
  }

  edit(artist) {
    this.router.navigate( ['Artist', { id: artist.id}] );
  }
}
