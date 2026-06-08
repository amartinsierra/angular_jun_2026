export class Operacion{
  tipo:string;
  expresion:string;
  resultado:number;
  constructor(tipo:string,expresion:string,resultado:number){
    this.tipo=tipo;
    this.expresion=expresion;
    this.resultado=resultado;
  }
}
