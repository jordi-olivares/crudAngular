import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetComponent } from './pet/pet.component';
import { PetsComponent } from './pets.component';

const routes: Routes = [
  { path: '', component: PetsComponent },
  {
    path: 'pet',
    component:PetComponent
  },
  {
    path: 'pet/:id',
    component:PetComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
