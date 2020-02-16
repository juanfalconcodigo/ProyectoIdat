import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../services/vehiculo.service';
import { VehiculoModel } from '../../../../models/vehiculo.model';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  vehiculos: VehiculoModel[] = [];
  cargando: boolean = false;
  constructor(private _service: VehiculoService) { }

  ngOnInit() {
    this.cargando = true;
    this._service.getVehiculos().subscribe(
      (resp) => {
        this.vehiculos = resp;
        console.log(resp);
        this.cargando = false;
      }
    );
  }

}
