import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './pages/crear/crear.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VerComponent } from './pages/ver/ver.component';

const routes: Routes = [
  { 
    path:'',
    component: DashboardComponent
  },
  // { 
  //   path:'dashboard',
  //   component: DashboardComponent
  // },
  { 
    path:'crear-rutina',
    component: CrearComponent
  },
  { 
    path:'ver-rutina/:index',
    component: VerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
