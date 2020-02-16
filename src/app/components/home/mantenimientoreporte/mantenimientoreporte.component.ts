import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from '../../../services/incidencia.service';
import { IncidenciaModel } from '../../../../models/incidencia.model';
import Swal from 'sweetalert2';
//para el modal
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-mantenimientoreporte',
  templateUrl: './mantenimientoreporte.component.html',
  styleUrls: ['./mantenimientoreporte.component.css']
})
export class MantenimientoreporteComponent implements OnInit {
  incidencias: IncidenciaModel[] = [];
  cargando: boolean = false;
  holi = "hola"
  //para el modal
  incidencia: IncidenciaModel;
  constructor(private _service: IncidenciaService, private _modalService: NgbModal) { }

  ngOnInit() {
    this.cargando = true;
    this._service.getIncidencias().subscribe(
      (resp) => {
        console.log(resp);
        this.incidencias = resp;
        this.cargando = false;
      }
    );
  }
  borrarIncidencia(incidencia: IncidenciaModel, i: number) {
    Swal.fire({
      type: 'question',
      title: '¿Estas seguro?',
      text: 'Esta seguro que desea eliminar incidencia',
      showCancelButton: true,
      showConfirmButton: true

    }).then(
      (resp) => {
        if (resp.value) {
          this.incidencias.splice(i, 1);

          this._service.borrarIncidencia(incidencia.id).subscribe();
        }
      }
    );

  }
  //para el modal
  enviarInfoIncidencia(incidencia: IncidenciaModel, idModal: string) {
    this.incidencia = incidencia;
    this._modalService.open(idModal);
    console.log(incidencia);
  }

}
