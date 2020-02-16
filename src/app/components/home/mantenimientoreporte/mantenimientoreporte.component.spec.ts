import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoreporteComponent } from './mantenimientoreporte.component';
/*servicio*/

import { HttpClientModule } from '@angular/common/http';
import { IncidenciaService } from '../../../services/incidencia.service';

describe('MantenimientoreporteComponent', () => {
  let component: MantenimientoreporteComponent;
  let fixture: ComponentFixture<MantenimientoreporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoreporteComponent ],
      providers:[IncidenciaService],//servicio
      imports:[HttpClientModule]//servicio
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoreporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
