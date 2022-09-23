import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  formUser?: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formUser=this.fb.group({
      name:['',[Validators.required,Validators.minLength(2)]],
      phone:['',Validators.required],
      age:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }
  save(): void{
    alert("guarda forms");
  }
}
