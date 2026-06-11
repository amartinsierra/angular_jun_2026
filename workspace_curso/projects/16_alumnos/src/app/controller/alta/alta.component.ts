import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Alumno } from '../../model/Alumno';
import { AlumnosService } from '../../service/alumnos.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validadorCurso } from '../functions/ValidarCurso';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Dialogo } from '../../ui/dialogo/dialogo';

@Component({
  selector: 'app-alta',

  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent implements OnInit{
  textoBoton:string;
  error:boolean=false;
  registroForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nota: new FormControl('', [Validators.required, Validators.min(1),Validators.max(10)]),
    curso: new FormControl('', [Validators.required,validadorCurso])
  });


  alumno:Alumno={"nombre":"","email":"","curso":"","nota":0};
  constructor(private route:ActivatedRoute,private alumnosService:AlumnosService,private matDialog:MatDialog){
      this.textoBoton=this.route.snapshot.paramMap.get("textoBoton");
  }
  ngOnInit(): void {
    this.registroForm.get("email").valueChanges.subscribe(data=>{
      const curso=this.registroForm.get("curso");
      if(data.endsWith("empresa.es")){
        curso.clearValidators();
      }else{
        curso.setValidators([Validators.required,validadorCurso]);
      }
      curso.updateValueAndValidity();
    });
  }
  alta(){
    console.log(this.registroForm.valid);
    if(this.registroForm.valid){
        const value=this.registroForm.value;
        this.alumno={nombre:value.nombre,curso:value.curso,email:value.email,nota:parseFloat(value.nota)};
        this.alumnosService.altaAlumno(this.alumno).subscribe(
        {
          next: (data)=>this.matDialog.open(Dialogo,{data:{mensaje:"Alumno agregado"}}),
          error: error=>this.matDialog.open(Dialogo,{data:{mensaje:`${value.email} ya existe. No se añadió`}}),
          complete: ()=>this.alumno={"nombre":"","email":"","curso":"","nota":0}
        }
      );
    }else{
      this.error=true;
    }


  }

}
