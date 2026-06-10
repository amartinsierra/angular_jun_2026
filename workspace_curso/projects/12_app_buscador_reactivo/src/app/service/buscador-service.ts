import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/Item';

@Injectable({
  providedIn: 'root',
})
export class BuscadorService {
  url:string="http://localhost:8000/buscador/items";

  constructor(private http:HttpClient){

  }
  itemsPorTematica(tematica:string):Observable<Item[]>{
    return this.http.get<Item[]>(this.url,{
      params:{tematica:tematica}
    });
  }

  altaItem(item:Item):Observable<void>{
    let headers=new HttpHeaders();
    headers=headers.set("Content-Type","application/json");
    return this.http.post<void>(this.url,item,{
      headers:headers
    });
  }

  eliminarPorUrl(dir:string):Observable<Item>{
    return this.http.delete<Item>(this.url,{
      params:{url:dir}
    });
  }

}
