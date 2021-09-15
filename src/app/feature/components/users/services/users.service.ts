import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';
import { environment } from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers():Observable<Users[]>{
    return this.httpClient.get<Users[]>(environment.usersUrl);
  }
}
