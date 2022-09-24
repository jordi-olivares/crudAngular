import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[]=[];
  dataSource: MatTableDataSource<User>=new MatTableDataSource<User>();
  displayedColumns=['id','name','phone','age','edit'];
  constructor(private userService: UserService) {
    this.loadUsers();
  }

  ngOnInit(): void {
  }
  loadUsers(): void{
    this.userService.getUsers().subscribe({
      next: (users)=>{
        this.dataSource.data=users;
      },
      error:(err)=>{
        alert('ocurrio un error');
      },
    });
  }
}
