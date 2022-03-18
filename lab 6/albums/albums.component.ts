import { Component, OnInit } from '@angular/core';
import {Album} from '../models';
import {AlbumService} from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] | undefined;
  loaded: boolean | undefined;
  newAlbum: string | undefined;
  constructor(private albumServ: AlbumService) { }

  ngOnInit(): void {
    this.newAlbum = '';
    this.getAlbums();
  }
  getAlbums(){
    this.loaded = false;
    this.albumServ.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }
  deleteAlbum(id: number){
    this.albums = this.albums?.filter((x) => x.id !== id);
    this.albumServ.deleteAlbum(id).subscribe(() => {
      console.log('album deleted');
    });
  }
  addAblum(){
    const album = {
      title: this.newAlbum
    };
    this.loaded = false;
    this.albumServ.createAlbum(album as Album).subscribe((album) => {
      // tslint:disable-next-line:no-non-null-assertion
      this.albums!.push(album);
      console.log(album);
      this.newAlbum = '';
      this.loaded = true;
    });
  }
}