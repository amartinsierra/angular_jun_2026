export class Resultado{
  url:string;
  tematica:string;
  descripcion:string;
  fecha:Date;
  constructor(url:string,tematica:string,descripcion:string,fecha:Date){
    this.url=url;
    this.tematica=tematica;
    this.descripcion=descripcion;
    this.fecha=fecha;
  }
}
