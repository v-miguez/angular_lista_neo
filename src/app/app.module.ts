import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {appRoutes} from './app.routing';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { ListadoComponent } from './listado/listado.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { AdministracionComponent } from './administracion/administracion.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
// import {MatDatepickerModule, MatNativeDateModule, MatDatepickerIntl} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CursosComponent,
    ListadoComponent,
    CalendarioComponent,
    AdministracionComponent,
    CiudadesComponent,
    AsistenciaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
    // MatDatepickerModule,
    // MatNativeDateModule
    

  ],
  providers: [
    // {provide: MatDatepickerIntl, useClass: MyIntl},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
