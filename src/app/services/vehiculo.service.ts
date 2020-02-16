import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { VehiculoModel } from '../../models/vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private url: string = 'https://proyecto-falcon-55bc1.firebaseio.com/';
  constructor(private http: HttpClient) { }

  getVehiculos() {
    return this.http.get(`${this.url}vehiculos.json`).pipe(
      map(this.crearArreglo),
      delay(1000)
    );
  }

  private crearArreglo(vehiculosObj: object) {
    const vehiculos: VehiculoModel[] = [];

    if (vehiculosObj == null) {
      return [];
    }
    Object.keys(vehiculosObj).forEach(
      (key) => {
        const vehiculo: VehiculoModel = vehiculosObj[key];
        vehiculo.id = key;
        vehiculos.push(vehiculo);
      }
    );

    return vehiculos;
  }
}
