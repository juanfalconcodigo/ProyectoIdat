import { Component, OnInit } from '@angular/core';
import { IncidenciaModel } from 'src/models/incidencia.model';
import { NgForm } from '@angular/forms';
import { IncidenciaService } from '../../../services/incidencia.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  incidencia = new IncidenciaModel();
  constructor(private _service: IncidenciaService, private route: ActivatedRoute) {
    this.incidencia.fecha = new Date();
  }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this._service.getIncidencia(id).subscribe(
        (resp: IncidenciaModel) => {
          this.incidencia = resp;
          this.incidencia.id = id;
        }
      );
    }

  }
  guardar(f: NgForm) {
    if (f.invalid) {
      //console.log(f);
      console.log("Formulario inválido");
      return;
    }

    Swal.fire({
      type: 'info',
      text: 'Guardando información',
      allowOutsideClick: false,
      title: 'Espere'
    });
    Swal.showLoading();

    let peticion: Observable<any>;


    if (this.incidencia.id) {
      peticion = this._service.actualizarIncidencia(this.incidencia);

    } else {

      peticion = this._service.crearIncidencia(this.incidencia);

    }

    peticion.subscribe(
      (resp) => {
        console.log(resp);

        Swal.fire({
          type: 'success',
          text: 'Se proceso correctamente',
          title: 'Incidencia'
        });

      }
    );

    console.log(f);
    //console.log(this.incidencia);

  }

}
