import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {MatButtonModule} from '@angular/material/button';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { PolicyComponent } from './policy/policy.component';


@NgModule({
  declarations: [
    AboutComponent,
    PolicyComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
  ]
})
export class AboutModule { }
