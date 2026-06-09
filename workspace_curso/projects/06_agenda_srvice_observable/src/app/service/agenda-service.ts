import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private contactos:Contacto[]=[];
  nuevo(contacto:Contacto):Observable<boolean>{
    if(this.contactos.some(c=>c.telefono==contacto.telefono)){
      return of(false);
    }
    this.contactos.push(contacto);
    return of(true);
  }
  recuperarContactos():Observable<Contacto[]>{
    return of(this.contactos);
  }
  eliminarContacto(telefono:string):Observable<void>{
    this.contactos=this.contactos.filter(c=>c.telefono!=telefono);
    return of();
  }
}
