import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrabsComponent } from './components/trabs/list-trabs/trabs.component';
import { TrabComponent } from './components/trabs/trab/trab.component';

const routes: Routes = [
  {
    path: 'works', component: TrabsComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path : 'works/:id', component: TrabComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
