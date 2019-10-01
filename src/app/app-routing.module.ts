import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ItemsComponent } from './components/items/items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: RegisterComponent},
  {path: '**', component: NotFoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
