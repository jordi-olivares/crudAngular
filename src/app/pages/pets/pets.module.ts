import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets.component';
import { PetComponent } from './pet/pet.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'src/app/components/table/table.module';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PetsComponent,
    PetComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    TableModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class PetsModule { }
