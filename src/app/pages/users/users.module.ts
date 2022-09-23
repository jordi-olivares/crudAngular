import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
//import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { TableModule } from 'src/app/components/table/table.module';
import { UserComponent } from './user/user.component';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }