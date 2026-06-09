import { Component } from '@angular/core';
import { Contacto } from '../../model/Contacto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgendaService } from '../../service/agenda-service';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule,CommonModule],
  templateUrl: './agenda.html',
  styleUrl: './agenda.css',
})
export class Agenda {
  contactos:Contacto[]=[];
  contacto:Contacto=new Contacto("","",0);

  //al declarar el parámetro private, lo define como un atributo de la clase
  constructor(private agendaService:AgendaService){

  }
  agregarContacto():void{
    if(!this.agendaService.nuevo(this.contacto)){
      alert("No se pudo añadir, contacto repetido!!");
    }
    this.contacto=new Contacto();
  }
  mostrarTodos():void{
    this.contactos=this.agendaService.recuperarContactos();
  }

  eliminarContacto(telefonoEliminar:string):void{
    this.agendaService.eliminarContacto(telefonoEliminar);
    this.mostrarTodos();
  }
}
