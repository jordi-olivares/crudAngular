import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[]=[];
  constructor(private userService: UserService) {
    this.loadUsers();
  }

  ngOnInit(): void {
  }
  loadUsers(): void{
    this.userService.getUsers().subscribe({
      next: (users)=>{
        this.users=users;
        console.log('Users del servicio: ',this.users)
      },
    });
  }
}
