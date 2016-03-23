import {Input, Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import Form from './edit/albumComponent';
import List from './list/albumsComponent';
import {ArtistManager} from '../../service/artistManager';
import {Album} from '../../model/album';

@Component({
  template:`<album-form (updateEmitter)="saveAlbum($event)" [album]="album"></album-form>
  <album-list (selectEmitter)="selectAlbum($event)"></album-list>`,
  directives: [Form, List]
})
@Reflect.metadata('design:paramtypes', [RouteParams, ArtistManager])
export default class Page {

  constructor(routeParams, am) {
    this.am = am;
    this.routeParams = routeParams;
    this.album = new Album();
  }

  saveAlbum(album) {
    var newer = this.artist.albums.every((element, index) => {
      if (element.id === album.id) {
        this.artist.albums[index] = this.album;
        return false;
      }
      return true;
    });

    if(newer || this.artist.albums.length == 0 ) {
      this.artist.albums.push(album);
    }
  }

  selectAlbum(album) {
    if (album) {
      this.album = album;
    } else {
      this.album = new Album();
    }
  }

  ngOnInit() {
    this.artistId = this.routeParams.get('id');
    this.artist = this.am.get(this.artistId);
  }

  ngOnDestroy() {
    this.am.saveAlbums(this.artist.id, this.artist.albums);
  }

}
