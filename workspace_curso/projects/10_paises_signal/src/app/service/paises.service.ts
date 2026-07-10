import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, shareReplay } from 'rxjs';
import { Pais } from '../model/Pais';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  url:string="https://countries.dev/countries?fields=name,region,population,flags"
  constructor(private http:HttpClient) { }
  getPaises():Observable<Pais[]>{
    /*let heads=new HttpHeaders();
    heads=heads.set("Authorization","Bearer rc_live_b130d9b5d20c4a4fa6bf40c7027d80db")
    return this.http.get<Main>(this.url,{"headers":heads})
    .pipe(map(m=>m.data),map(d=>d.objects[0]),map(o=>o.paises));*/
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
