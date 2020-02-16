import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from '../../../services/incidencia.service';
import { ActivatedRoute } from '@angular/router';
import { IncidenciaModel } from '../../../../models/incidencia.model';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  incidencias: IncidenciaModel[] = [];
  cargando: boolean;
  constructor(private _service: IncidenciaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargando = true;
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params['termino']);


        this.incidencias = this._service.buscarIncidencia(params['termino']);
        console.log(this.incidencias);
        this.cargando = false;


      }
    );
  }

}
