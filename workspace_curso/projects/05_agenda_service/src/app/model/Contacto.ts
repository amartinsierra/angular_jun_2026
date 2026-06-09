export class Contacto{
  nombre:string;
  telefono:string;
  edad:number;
  constructor(nombre?:string,telefono?:string,edad?:number){
    this.nombre=nombre;
    this.telefono=telefono;
    this.edad=edad;
  }
}
