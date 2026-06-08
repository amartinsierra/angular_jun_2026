import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  num1:number;
  num2:number;
  resultado:string;
  sumar():void{
    this.resultado=`La suma es ${this.num1+this.num2}`;
  }
  multiplicar():void{
    this.resultado=`La multiplicacion es ${this.num1*this.num2}`;
  }
}
