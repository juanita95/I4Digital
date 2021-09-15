import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Users[] = [];
  filterName:string = '';
  loading:boolean;

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.loading = true;
    this.userService.getAllUsers().subscribe((users)=>{
      this.users = users;
      this.loading = false;
    });
  }
}
