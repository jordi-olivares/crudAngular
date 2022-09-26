import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pet } from 'src/app/model/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  pets: Pet[]=[];
  dataSource: MatTableDataSource<Pet>=new MatTableDataSource<Pet>();
  displayedColumns=['id','name','typ','family','owner','ownerphone','edit','delete'];
  constructor(private petService: PetService) { 
    this.loadPets();
  }

  ngOnInit(): void {
  }

  loadPets():void{
    this.petService.getPets().subscribe({
      next:(pets)=>{
        this.dataSource.data=pets;
      },
      error:()=>{
        alert('ocurrio un error al cargar los datos');
      }
    });
  }
  delete(id: number):void{
    this.petService.deletePet(id).subscribe({
      next:()=>{
        alert('mascota eliminada');
      },
      error:()=>{
        alert('error al eliminar mascota');
      }
    });
  }

}