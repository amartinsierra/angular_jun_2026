import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Post } from '../model/Post';
import {Comment} from '../model/Comment'
@Injectable({
  providedIn: 'root',
})
export class TypiService {
  private url:string="https://jsonplaceholder.typicode.com/";
  constructor(private http:HttpClient){

  }

  posts():Observable<Post[]>{
    return this.http.get<Post[]>(this.url+"posts");
  }
  commentsByPost(postId:number):Observable<Comment[]>{
    //return this.http.get<Comment[]>(`${this.url}comments?postId=${postId}`);
    return this.http.get<Comment[]>(`${this.url}comments`,{
      params:{postId:postId}
    });

  }

  postsByUser(userId:number):Observable<Post[]>{
    return this.posts().pipe(map(m=>m.filter(p=>p.userId==userId)));
  }

  emails():Observable<String[]>{
    /*return this.http.get<Comment[]>(`${this.url}comments`)
    .pipe(map(ar => [...new Set(ar.map(c => c.email))]));*/
    return this.http.get<Comment[]>(`${this.url}comments`).pipe(
      map(comments => Array.from(new Set(comments.map(c => c.email))))
  );
  }
}
