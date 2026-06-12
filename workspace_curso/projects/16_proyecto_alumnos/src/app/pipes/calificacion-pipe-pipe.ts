import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calificacion',
})
export class CalificacionPipePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if(value<5){
      return "suspenso";
    }else if(value>=5&&value<7){
      return "aprobado";
    }else if(value>=7&&value<9){
      return "notable";
    }else if(value>=9&&value<10){
      return "sobresaliente";
    }else{
      return "desconocido";
    }
  }
}
