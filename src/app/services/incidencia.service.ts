import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IncidenciaModel } from 'src/models/incidencia.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {
  private url: string = "https://proyecto-falcon-55bc1.firebaseio.com/";

  constructor(private http: HttpClient) { }

  crearIncidencia(incidencia: IncidenciaModel) {


    return this.http.post(`${this.url}incidencias.json`, incidencia).pipe(
      map(
        (resp: any) => {
          incidencia.id = resp.name;
          return incidencia;
        }
      )
    );
  }
  actualizarIncidencia(incidencia: IncidenciaModel) {
    const incidenciaTemp = {
      ...incidencia
    };
    delete incidenciaTemp.id;
    return this.http.put(`${this.url}incidencias/${incidencia.id}.json`, incidenciaTemp);
  }

  getIncidencia(id: string) {
    return this.http.get(`${this.url}incidencias/${id}.json`);
  }


  getIncidencias() {
    return this.http.get(`${this.url}incidencias.json`).pipe(
      map(this.crearArreglo),
      delay(1000)
    );
  }


  private crearArreglo(incidenciasObj: object) {
    const incidencias: IncidenciaModel[] = [];

    if (incidenciasObj == null) {
      return [];
    }
    Object.keys(incidenciasObj).forEach(
      (key) => {
        const incidencia: IncidenciaModel = incidenciasObj[key];
        incidencia.id = key;
        incidencias.push(incidencia);
      }
    );

    return incidencias;
  }

  borrarIncidencia(id: string) {
    return this.http.delete(`${this.url}incidencias/${id}.json`);

  }
  /* */


  buscarIncidencia(termino: string): IncidenciaModel[] {
    let IncidenciaArr: IncidenciaModel[] = [];
    termino = termino.toLowerCase();
    let incidencias: IncidenciaModel[] = [];



    this.http.get(`${this.url}incidencias.json`).pipe(map(this.crearArreglo),delay(1000)).subscribe((resp: IncidenciaModel[]) => {
      incidencias = resp;
      //console.log(incidencias);
      for (let incidencia of incidencias) {
        let nombre = incidencia.codVehiculo.toLowerCase();
        if (nombre.indexOf(termino) >= 0) {
          IncidenciaArr.push(incidencia);
          //console.log(nombre);
        }

      }

    });
    /*console.log(incidencias);
    console.log(IncidenciaArr);
    /*for (let incidencia of incidencias) {
      let nombre = incidencia.codVehiculo.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        IncidenciaArr.push(incidencia);
        console.log(nombre);
      }

    }*/
    return IncidenciaArr;
  }









}
