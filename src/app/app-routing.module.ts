import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "home",//http://localhost:4200/home
    loadChildren: ()=>import("./pages/home/home.module").then((m)=>m.HomeModule),
  },
  {
    path: "about",//http://localhost:4200/about
    loadChildren: ()=>import("./pages/about/about.module").then((m)=>m.AboutModule),
  },
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
