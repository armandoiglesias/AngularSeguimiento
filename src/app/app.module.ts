import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { config } from '../config/firebase.config';

import { AgmCoreModule } from '@agm/core'; 

import { UbicacionService  } from "../app/services/ubicacion.service";





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AngularFireModule.initializeApp(config),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDE807WHrPnV95oRrQ8iohN0YyQX0XChWA'
    })
  ],
  providers: [
    UbicacionService, AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
