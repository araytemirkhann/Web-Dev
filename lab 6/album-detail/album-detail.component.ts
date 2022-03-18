import { Component, OnInit } from '@angular/core';
import {Album} from '../models';
import {ActivatedRoute} from '@angular/router';
import {Albums} from '../fake-db';
import {Location} from '@angular/common';
import {AlbumService} from '../album.service';
@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;
  loaded: boolean | undefined;
  constructor(private route: ActivatedRoute, private location: Location, private AlbumServ: AlbumService) { }

  ngOnInit(): void {
    this.getAlbum();
  }
  goBack(){
    this.location.back();
  }
  getAlbum(){
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.loaded = false;
      if (id != null){
        this.AlbumServ.getAlbum(id).subscribe((album) => {
          this.album = album;
          this.loaded = true;
        });
      }
    });
  }
  updateAlbum(){
    this.loaded = false;
    // tslint:disable-next-line:no-non-null-assertion
    this.AlbumServ.updateAlbum(this.album!).subscribe((album) => {
      console.log(album);
      this.loaded = true;
    });
  }

}