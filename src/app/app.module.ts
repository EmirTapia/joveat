import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaDeMiComponent } from './pages/acerca-de-mi/acerca-de-mi.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { PaqueteComponent } from './pages/paquete/paquete.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { FaqComponent } from './pages/faq/faq.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    AcercaDeMiComponent,
    ContactoComponent,
    BlogComponent,
    PaquetesComponent,
    NoEncontradoComponent,
    PaqueteComponent,
    ArticuloComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
