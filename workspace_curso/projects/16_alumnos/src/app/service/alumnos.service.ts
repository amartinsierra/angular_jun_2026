import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../model/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  url:string="http://localhost:9000/"
  constructor(private http:HttpClient) { }

  altaAlumno(alumno:Alumno):Observable<void>{
    return this.http.post<void>(this.url+"alumnos",alumno);
  }
  buscarAlumno(email:string):Observable<Alumno>{
    return this.http.get<Alumno>(`${this.url}alumnos/${email}`);
  }
  alumnosCurso(curso:string):Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${this.url}alumnos/por-curso`,{params:{curso:curso}});
  }
  eliminarAlumno(email:string):Observable<Alumno>{
    return this.http.delete<Alumno>(`${this.url}alumnos/${email}`);
  }
  cursos():Observable<string[]>{
    return this.http.get<string[]>(`${this.url}alumnos/cursos`);
  }
}
