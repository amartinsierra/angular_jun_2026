import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, shareReplay } from 'rxjs';
import { Pais } from '../model/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  url:string="https://restcountries.com/v3.1/all?fields=name,region,population,flags"
  constructor(private http:HttpClient) { }
  getPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url);
  }
  getContinentes():Observable<string[]>{
    return this.getPaises()
            .pipe(
              map(ar=>[...new Set(ar.map(a=>a.region))])
            );
  }


  getPaisesContinente(continente:string):Observable<Pais[]>{
    return this.getPaises()
    .pipe(
      map(ar=>ar.filter(e=>e.region==continente))
    );
  }

}
