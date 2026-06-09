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
    this.agendaService.nuevo(this.contacto)
    .subscribe(r=>{
        if(!r){
              alert("No se pudo añadir, contacto repetido!!");
        }
        this.contacto=new Contacto();
    });


  }
  mostrarTodos():void{
    this.agendaService.recuperarContactos()
    .subscribe(data=>this.contactos=data);
  }

  eliminarContacto(telefonoEliminar:string):void{
    this.agendaService.eliminarContacto(telefonoEliminar)
    .subscribe(r=>this.mostrarTodos());
  }
}
