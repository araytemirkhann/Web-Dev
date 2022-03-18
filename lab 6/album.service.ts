import { Injectable } from '@angular/core';
import {Albums} from './fake-db';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Album} from './models';
import {Photo} from './photo';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private client: HttpClient) { }
  // getAlbums(){
  //   return of(Albums);
  // }
  // getAlbum(id: string){
  //   // @ts-ignore
  //   // tslint:disable-next-line:triple-equals
  //   const album = Albums.find((x) => x.id == id);
  //   return of(album);
  // }
  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`${this.baseUrl}/albums`);
  }
  getAlbum(id: string): Observable<Album>{
    return this.client.get<Album>(`${this.baseUrl}/albums/${id}`);
  }
  createAlbum(album: Album): Observable<any>{
    return this.client.post(`${this.baseUrl}/albums`, album);
  }
  deleteAlbum(id: number): Observable<any>{
    return this.client.delete(`${this.baseUrl}/albums/${id}`);
  }
  updateAlbum(album: Album): Observable<Album>{
    return this.client.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }
  getPhotos(id: string): Observable<Photo[]>{
    return this.client.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }
}