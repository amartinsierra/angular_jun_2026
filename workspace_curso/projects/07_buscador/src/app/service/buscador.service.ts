import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { from, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
  completo:Resultado[]=[
    new Resultado("http://www.fnac.es/","libros","Libros y más",new Date(2023,11,3)),
    new Resultado("http://www.mybook.com/","libros","librería de temas varios",new Date(2024,9,13)),
    new Resultado("http://www.game.es/","juegos","Juegos variados",new Date(2025,11,6)),
    new Resultado("http://www.music.es/","música","La mejor música",new Date(2024,8,17)),
    new Resultado("http://www.tech.com/","libros","Libros técnicos",new Date(2021,5,6)),
    new Resultado("http://www.eljuego.es/","juegos","Juegos on-line",new Date(2023,3,30))
   ];
  buscar(tematica:string):Observable<Resultado[]>{
    //return from(this.completo.filter(r => r.tematica == tematica));
    if(tematica.length>0){
      return of (this.completo.filter(r => r.tematica == tematica));
    }
    return throwError(()=>new Error("temática vacía!!"));

  }
  tematicas():Observable<string[]>{
    return of([...new Set(this.completo.map(r=>r.tematica))]);//eliminamos tematicas duplicadas
  }
}
