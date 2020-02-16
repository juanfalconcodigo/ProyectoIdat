export class IncidenciaModel{
    id:string;
    observacion:string;
    estado:boolean;
    fecha:Date;
    caracter:string;
    codEmpleado:string;
    codVehiculo:string;
    constructor(){
        this.estado=false;
    }
}