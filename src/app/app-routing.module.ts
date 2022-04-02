import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeMiComponent } from './pages/acerca-de-mi/acerca-de-mi.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ModalsComponent } from './pages/modals/modals.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { PaqueteComponent } from './pages/paquete/paquete.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'inicio', component: InicioComponent},
  {path:'acerca-de-mi', component: AcercaDeMiComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'blog/:name', component: ArticuloComponent},
  {path:'blog', component: BlogComponent},
  {path:'faq', component: FaqComponent},
  {path:'paquetes', component: PaquetesComponent},
  {path:'paquete/:name', component: PaqueteComponent},
  {path:'modals', component: ModalsComponent},
  {path:'**', component: NoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
