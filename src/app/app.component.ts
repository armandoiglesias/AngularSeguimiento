import { Component } from '@angular/core';

import { UbicacionService } from "../app/services/ubicacion.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  taxistas : any[]= [];
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  following:boolean= false;
  taxistaSeleccionado:any = {};

  //items:any[] = [];
  constructor(private _ubicaService:UbicacionService ) {
    this._ubicaService.getUsuarios().subscribe(data => {
      this.taxistas = data;
    });
    
  }

  seguirTaxista(taxista){
    this.following = true;
    this.lat = (taxista.lat) && taxista.lat;
    this.lng = taxista.lng && taxista.lng;
    this.title = taxista.nombre;
    this.taxistaSeleccionado = taxista;
  }

  stopFollowing(){
    this.following = false;
    this.taxistaSeleccionado = {};
  }
  //title = 'app';
}
