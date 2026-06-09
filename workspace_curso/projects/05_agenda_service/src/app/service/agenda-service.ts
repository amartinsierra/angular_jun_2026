import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private contactos:Contacto[]=[];
  nuevo(contacto:Contacto):boolean{
    if(this.contactos.some(c=>c.telefono==contacto.telefono)){
      return false;
    }
    this.contactos.push(contacto);
    return true;
  }
  recuperarContactos():Contacto[]{
    return this.contactos;
  }
  eliminarContacto(telefono:string){
    this.contactos=this.contactos.filter(c=>c.telefono!=telefono)
  }
}
