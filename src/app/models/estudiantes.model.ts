//modelos para el envio y retencion de informacion para el backend
export class EstudianteModel {

    public idEstudiantes: number;
    public nombre: string;
    public apellido1: string;
    public apellido2: string;
    public edad: number;
    public genero: string;
}
export class EstudianteInsertModel {
    public nombre: string;
    public apellido1: string;
    public apellido2: string;
    public edad: number;
    public genero: string;
}
