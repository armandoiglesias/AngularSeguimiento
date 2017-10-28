import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UbicacionService {

  usuario: AngularFireObject<any[]>;
  usuarios:any;
  private watch: any = null;

  constructor(private afDB: AngularFireDatabase) {

  }

  getUsuario(usuario: string) {
    this.usuario = this.afDB.object('/usuarios/' + usuario);

  }

    getUsuarios() {
    return this.afDB.list('/usuarios').valueChanges();
    ;

  }



}
