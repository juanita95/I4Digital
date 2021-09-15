import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album.model';
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
})
export class AlbumsComponent implements OnInit {

  albums: Album[]= [];
  loading:boolean;

  constructor(private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void{
    this.loading = true;
    this.albumService.getAllAlbums().subscribe((albums)=>{
      this.albums = albums;
      this.loading = false;
    });
  }

}
