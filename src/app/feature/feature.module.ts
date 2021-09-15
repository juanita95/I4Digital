import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/components/users.component';
import { HomeComponent } from './components/home/components/home.component';
import { AlbumsComponent } from './components/albums/components/albums.component';
import { PublicationsComponent } from './components/publications/components/publications.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, HomeComponent, AlbumsComponent, PublicationsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[UsersComponent, HomeComponent, AlbumsComponent, PublicationsComponent],
})
export class FeatureModule { }
