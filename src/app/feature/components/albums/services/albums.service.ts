import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { environment } from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient: HttpClient) { }

  getAllAlbums():Observable<Album[]>{
    return this.httpClient.get<Album[]>(environment.AlbumsUrl);
  }
}
