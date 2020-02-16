import { TestBed, getTestBed } from '@angular/core/testing';

import { IncidenciaService } from './incidencia.service';

//servicio
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { IncidenciaModel } from 'src/models/incidencia.model';
/*describe('IncidenciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncidenciaService = TestBed.get(IncidenciaService);
    expect(service).toBeTruthy();
  });
});*/
describe('IncidenciaService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  it('Se espera el retorno de  Observable<Incidencia[]>', () => {
    const service: IncidenciaService = TestBed.get(IncidenciaService);
    const dummyIncidencia = [
      {
        caracter: "normal",
        codEmpleado: "321654",
        codVehiculo: "123456",
        estado: false,
        fecha: "2019-06-09T01:04:12.054Z",
        observacion: "Todo en orden no hay novedades en el viaje."
      }
    ];

    service.getIncidencias().subscribe((incidencias: any) => {
      expect(incidencias).toEqual(dummyIncidencia);
    });

    const req = httpMock.expectOne(
      'https://proyecto-falcon-55bc1.firebaseio.com/incidencias.json'
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyIncidencia);
  });




  
});

