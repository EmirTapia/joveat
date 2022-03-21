import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeMiComponent } from './pages/acerca-de-mi/acerca-de-mi.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ModalsComponent } from './pages/modals/modals.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'inicio', component: InicioComponent},
  {path:'acerca-de-mi', component: AcercaDeMiComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'blog', component: BlogComponent},
  {path:'paquetes', component: PaquetesComponent},
  {path:'modals', component: ModalsComponent},
  {path:'**', component: NoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
