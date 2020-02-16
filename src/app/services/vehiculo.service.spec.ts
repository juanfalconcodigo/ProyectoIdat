import { TestBed,getTestBed  } from '@angular/core/testing';

import { VehiculoService } from './vehiculo.service';
import { VehiculoModel } from '../../models/vehiculo.model';
//servicio
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
/*describe('VehiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehiculoService = TestBed.get(VehiculoService);
    expect(service).toBeTruthy();
  });
});*/

describe('VehiculoService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  it('Se espera el retorno de  Observable<Vehiculo[]>', () => {
    const service: VehiculoService = TestBed.get(VehiculoService);
    const dummyVehiculos = [
      {
        estadoVehiculo: "bueno",
        imagenVehiculo: "http://4.bp.blogspot.com/-Jor1ROvYyno/T66Vm8ziOmI/AAAAAAAAALw/_nPO60fsSlI/s1600/mini-bus-full-equipo-31-asientos-danjul.gif",
        marcaVehiculo: "toyota",
        modeloVehiculo: "toyota-2015",
        obsVehiculo: "esta en buen estado",
        placaVehiculo: "251489ghtugh"
        
  }];

    service.getVehiculos().subscribe((vehiculos:any) => {
      expect(vehiculos).toEqual(dummyVehiculos);
    });

    const req = httpMock.expectOne(
      'https://proyecto-falcon-55bc1.firebaseio.com/vehiculos.json'
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyVehiculos);
  });

  /*it('should return an Error', () => {
    const service: UserService = TestBed.get(UserService);
    const dummyError = { errorCode: 'error' };

    service.getUsersWithError().subscribe(users => {
      expect(users).toEqual(dummyError);
    });

    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/users' + 'withError'
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyError);
  });*/
});
