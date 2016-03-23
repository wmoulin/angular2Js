import {Component, Injectable, Input, Output, EventEmitter} from "angular2/core";
import {Control, FormBuilder, Validators} from "angular2/common";
import {Album} from "../../../model/album";
import {ArtistManager} from "../../../service/artistManager";
import {RouteParams, Router} from 'angular2/router';
import YearValidator from "../../validators/yearValidator"
import Error from '../../error/errorComponent';

@Component({
  selector: 'album-form',
  templateUrl: 'app/components/album/edit/template.html',
  directives: [Error]
})
// @Injectable() // not mandatory it's anly add metadata
@Reflect.metadata('design:paramtypes', [Router, RouteParams, FormBuilder, ArtistManager])
export default class AlbumComponent {

  @Output()
  updateEmitter = new EventEmitter();

  @Input()
  album = new Album();

  constructor(router, routeParams, formBuilder, am) {
    this.albums;
    this.am = am;
    this.router = router;
    this.routeParams = routeParams;
    this.formBuilder = formBuilder;
    this.albumForm = this.formBuilder.group({
      name: [this.album.name, Validators.required],
      year: [this.album.year, Validators.compose([Validators.required, YearValidator.after(2000)])]
    });
  }

  ngOnInit() {
    this.artistId = this.routeParams.get('id');
    let artist = this.am.get(this.artistId);
    if (artist && artist.albums) {
      this.albums = artist.albums;
    } else {
      this.albums = [];
    }

    //this.year = this.albumForm.controls.year; // binding template ngFormControl
  }

  ngAfterViewChecked() {
    /*this.albumForm.controls.name.validator = Validators.required;
    this.albumForm.controls.year.validator = Validators.compose([Validators.required, YearValidator.after(2000)]);*/
  }

  addAlbum() {
    this.album = new Album(this.albums.length + 1);
    this.albumForm.doValid = false;
  }

  saveAlbum() {
    this.albumForm.doValid = true;
    if (this.albumForm && this.albumForm.valid) {
      this.updateEmitter.next(this.album);
      this.album = new Album();
      this.albumForm.doValid = false;
    }
  }

  cancel() {
    this.albumForm.doValid = false;
    this.album = new Album();
  }

  returnBack(){
    this.router.navigate( ['Home'] );
  }

}
