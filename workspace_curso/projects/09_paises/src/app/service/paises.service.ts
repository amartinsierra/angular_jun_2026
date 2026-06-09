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

  getContinentes():Observable<string[]>{
    return this.http.get<Pais[]>(this.url)
            .pipe(map(ar=>[...new Set(ar.map(a=>a.region))]));
  }

  getPaises():Observable<Pais[]>{

    /*return this.http.get<Pais[]>(this.url).pipe(
      map(ar=>ar.filter(e=>parseInt(e.population)>10000000))
    );*/
    return this.http.get<Pais[]>(this.url);
  }
  getPaisesContinente(continente:string):Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url).pipe(
      map(ar=>ar.filter(e=>e.region==continente)),shareReplay(1)
    );
  }

}
