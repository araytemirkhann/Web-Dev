import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Photo} from '../photo';
import {AlbumService} from '../album.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photo[] | undefined;
  constructor(private location: Location, private albumServ: AlbumService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPhotos();
  }
  goBack(){
    this.location.back();
  }
  getPhotos(){
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id != null){
        this.albumServ.getPhotos(id).subscribe((photo) => {
          this.photos = photo;
        });
      }
    });
  }
}