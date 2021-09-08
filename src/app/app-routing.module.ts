import { NgModule } from '@angular/core';
import { HomeComponent } from './modules/general/home/home.component';
import { ToDoComponent } from './modules/general/to-do/to-do.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'to-do', component: ToDoComponent, }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
