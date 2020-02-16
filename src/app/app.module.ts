import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';


import { NosotrosComponent } from './components/home/nosotros/nosotros.component';
import { ReportesComponent } from './components/home/reportes/reportes.component';
import { HeaderComponent } from './components/home/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { MantenimientoreporteComponent } from './components/home/mantenimientoreporte/mantenimientoreporte.component';
import { VehiculosComponent } from './components/home/vehiculos/vehiculos.component';

//para el idioma
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);
//para el ngbootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BuscarComponent } from './components/home/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    NosotrosComponent,
    ReportesComponent,
    HeaderComponent,
    MantenimientoreporteComponent,
    VehiculosComponent,
    BuscarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
