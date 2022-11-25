import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { GruposComponent } from './pages/grupos/grupos.component';

const routes: Routes = [
  
  {path: 'inicio', component: InicioComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'grupos', component: GruposComponent},
  {path: '**',pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
