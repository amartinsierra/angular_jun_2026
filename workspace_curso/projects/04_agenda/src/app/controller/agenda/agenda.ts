import { Component } from '@angular/core';
import { Contacto } from '../../model/Contacto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule,CommonModule],
  templateUrl: './agenda.html',
  styleUrl: './agenda.css',
})
export class Agenda {
  contactos:Contacto[]=[];
  contacto:Contacto=new Contacto("","",0);
  show:boolean=false;
  agregarContacto():void{
    if(this.contactos.some(c=>c.telefono==this.contacto.telefono)){
      alert("Contacto repetido!!!");
      return;
    }
    this.contactos.push(this.contacto);

    this.contacto=new Contacto();
  }
  mostrarTodos():void{
    this.show=true;
  }
}
