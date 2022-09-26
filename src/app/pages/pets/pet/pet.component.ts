import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/model/pet.model';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  title='';
  idPet?:number;
  formPet?: FormGroup;
  constructor(private fb: FormBuilder,private petService: PetService,private router:Router,private activateRoute: ActivatedRoute) {
    this.formPet=this.fb.group({
      name:['',Validators.required],
      family:['',Validators.required],
      owner:['',Validators.required],
      ownerphone:['',Validators.required]
    });

    this.activateRoute.params.subscribe({
      next:(params)=>{
        if(params['id']){
          this.title='Editar Mascota';
          this.idPet=params['id'];
          this.loadPet();
        }
        else{
          this.title="Registrar Mascota";
        }
      },
    });
  }

  ngOnInit(): void {
  }
  loadPet():void{
    if(this.idPet){
      this.petService.getPet(this.idPet).subscribe({
        next:(pet)=>{
          this.formPet?.patchValue(pet);
        },
        error:()=>{
          alert('ocurrio un error al cargar datos');
        }
      });
    }
  }

  save():void{
    const pet: Pet=this.formPet?.value as Pet;
    if(this.idPet){
      this.petService.editPet(pet,this.idPet).subscribe({
        next:()=>{
          this.router.navigateByUrl('/pets');
        },
        error:()=>{
          alert('ocurrio un problema al modificar la mascota');
        }
      });
    }
    else{
      this.petService.newPet(pet).subscribe({
        next:()=>{
          alert('MASCOTA INSERTADA');
          this.router.navigateByUrl('/pets');
        },
        error:()=>{
          alert('ocurrio un error al crear la mascota');
        }
      });
    }
  }

}
