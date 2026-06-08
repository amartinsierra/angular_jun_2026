import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Operacion } from './model/Operacion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  num1:number;
  num2:number;
  resultado:string;
  historico:Operacion[]=[];
  show:boolean=false;
  sumar():void{
    this.resultado=`La suma es ${this.num1+this.num2}`;
    this.historico.push(new Operacion("suma",`${this.num1}+${this.num2}`,this.num1+this.num2));
  }
  multiplicar():void{
    this.resultado=`La multiplicacion es ${this.num1*this.num2}`;
    this.historico.push(new Operacion("multiplicación",`${this.num1}X${this.num2}`,this.num1*this.num2));
  }
  mostrarHistorico(){
    this.show=true;
  }
}
