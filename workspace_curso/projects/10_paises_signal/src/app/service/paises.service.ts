import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, shareReplay } from 'rxjs';
import { Pais } from '../model/Pais';
import { Main } from '../model/Main';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  url:string="https://api.restcountries.com/countries/v5?response_fields=names.common,region,population,flag.url_png&limit=100"
  constructor(private http:HttpClient) { }
  getPaises():Observable<Pais[]>{
    let heads=new HttpHeaders();
    heads=heads.set("Authorization","Bearer rc_live_b130d9b5d20c4a4fa6bf40c7027d80db")
    return this.http.get<Main>(this.url,{"headers":heads})
    .pipe(map(m=>m.data),map(d=>d.objects[0]),map(o=>o.paises));
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
