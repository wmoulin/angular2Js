import {Component, Output, EventEmitter} from 'angular2/core';
import {Artist} from '../../../model/artist';
import {ArtistManager} from '../../../service/artistManager';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'album-list',
  templateUrl:"app/components/album/list/template.html"
})
@Reflect.metadata('design:paramtypes', [RouteParams, ArtistManager])
export default class AlbumsComponent {

  @Output()
  selectEmitter = new EventEmitter();

  constructor(routeParams, am) {
    this.albums;
    this.selectedAlbum;
    this.am = am;
    this.routeParams = routeParams;
  }

  remove(album) {
    this.am.removeAlbum(this.artistId, album.id);
    let artist = this.am.get(this.artistId);
    if (artist && artist.albums) {
      this.albums = artist.albums;
    } else {
      this.albums = [];
    }
  }

  onSelect(album) {
    if (this.selectedAlbum && this.selectedAlbum.id === album.id) {
      this.selectedAlbum = undefined;
    } else {
      this.selectedAlbum = album;
    }
    this.selectEmitter.next(this.selectedAlbum);
  }

  ngOnInit() {
    this.artistId = this.routeParams.get('id');
    let artist = this.am.get(this.artistId);
    if (artist && artist.albums) {
      this.albums = artist.albums;
    } else {
      this.albums = [];
    }
  }
}
