import { Routes } from '@angular/router';
/*componentes*/
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ReportesComponent } from './reportes/reportes.component';
import { MantenimientoreporteComponent } from './mantenimientoreporte/mantenimientoreporte.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { BuscarComponent } from './buscar/buscar.component';


export const HOME_ROUTES: Routes = [
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'reportes/:id', component: ReportesComponent },
    { path: 'vehiculos', component: VehiculosComponent },
    { path: 'mantenimientoreporte', component: MantenimientoreporteComponent },
    { path: 'buscar/:termino', component: BuscarComponent },

    { path: '**', pathMatch: "full", redirectTo: 'nosotros' }

];


