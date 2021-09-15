import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './feature/components/home/components/home.component'
import {PublicationsComponent} from './feature/components/publications/components/publications.component'
import {AlbumsComponent} from './feature/components/albums/components/albums.component'
import {UsersComponent} from './feature/components/users/components/users.component'


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'albums', component: AlbumsComponent},
  {path:'publications', component: PublicationsComponent},
  {path:'users', component: UsersComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
