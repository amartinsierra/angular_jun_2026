import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  nombre:string;
  edad:number;
  resultado:string;
  mostrar():void{
    this.resultado=`Te llamas ${this.nombre} y tiene ${this.edad} años`;
  }
}
