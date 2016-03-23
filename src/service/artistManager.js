import {Artist} from '../model/artist';

export class ArtistManager{
  artists=[];

  constructor(){
    this.init();
  }

  add(artist) {
    this.artists.push(artist);
    this.save(this.artists);
  }

  get(id) {
    let artists = this.artists.filter((element) => {return element.id === id});
    return artists && artists.length > 0 ? artists[0] : undefined;
  }

  save(artists) {
    localStorage.setItem("artists",JSON.stringify(this.artists));
  }

  saveArtist(artist) {
    let artists = this.artists.filter((element) => {return element === artist.id});
    artists.push(artist);
    this.artists = artists;
    this.save(this.artists);
  }

  saveAlbums(id, albums) {
    this.artists.forEach((artist, index) => {
      if (artist.id === id) {
        this.artists[index].albums = albums;
        return false;
      }
    });
  }

  removeAlbum(id, albumId) {
    this.artists.forEach((artist, index) => {
      if (artist.id === id) {
        this.artists[index].albums = this.artists[index].albums.filter((album) => {album.id !== albumId});
        return false;
      }
    });
  }

  remove(artist) {
      this.artists.splice(this.artists.indexOf(artist),1);
      this.save(this.artists);
  }

  init() {
    this.artists = JSON.parse(localStorage.getItem("artists")) || [];
    if (!this.artists || !Array.isArray(this.artists) || this.artists.length == 0) {
      this.artists=[new Artist(new Date().getMilliseconds(), "U2")];
    }
  }
}
