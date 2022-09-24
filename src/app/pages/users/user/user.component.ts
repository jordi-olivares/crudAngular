import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title='';
  idUser?: number;
  formUser?: FormGroup;
  constructor(private fb: FormBuilder,private userService: UserService,private router:Router,private activatedRoute: ActivatedRoute) {
    this.formUser=this.fb.group({
      name:['',[Validators.required,Validators.minLength(2)]],
      phone:['',Validators.required],
      age:['',Validators.required]
    });

    this.activatedRoute.params.subscribe({
      next:(params)=>{
        //edicion
        if(params['id']){
          this.title='Editar usuario';
          this.idUser=params['id'];
          this.loadUser();
        }else{//creación
          this.title='Crear Usuario';
        }
      }
    });
   }

  ngOnInit(): void {}
  loadUser():void{
    if(this.idUser){
      this.userService.getUser(this.idUser).subscribe({
        next:(user)=>{
          this.formUser?.patchValue(user);
        },
        error: ()=>{
          alert('ocurrio un error');
        }
      });
    }
    
  }
  save(): void{
    const user: User=this.formUser?.value as User;
    if(this.idUser){
      //edición
      this.userService.editUser(user,this.idUser).subscribe({
        next:()=>{
          console.log('usuario modificado');
          this.router.navigateByUrl('/users');
        },
        error:()=>{
          alert('Ocurrío un error');
        }
      });
    }
    else{
      //creación
    this.userService.newUser(user).subscribe({
      next:()=>{
        console.log('USUARIO INSERTADO');
        this.router.navigateByUrl('/users');
      },
      error:()=>{
        alert('ocurrio un error');
      }
    });
    } 
  }
}
