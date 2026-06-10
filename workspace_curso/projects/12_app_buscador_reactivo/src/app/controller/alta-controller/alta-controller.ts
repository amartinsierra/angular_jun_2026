import { Component, OnInit, signal } from '@angular/core';
import { Item } from '../../model/Item';
import { HttpClient } from '@angular/common/http';
import { BuscadorService } from '../../service/buscador-service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-controller',
  imports: [ReactiveFormsModule],
  templateUrl: './alta-controller.html',
  styleUrl: './alta-controller.css',
})
export class AltaController implements OnInit{
  item=signal<Item>({"url":"","tematica":"","descripcion":""});
  error:boolean=false;
  registroForm = new FormGroup({
    url: new FormControl('', [Validators.required]),
    tematica: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(5)])
  });



  constructor(private buscadorService:BuscadorService){}
  ngOnInit(): void {
    //cuando cambia el contenido de la url, lo trasladamos a la descripción
    this.registroForm.get("url").valueChanges
    .subscribe(c=>this.registroForm.get("descripcion").setValue(c));
    //si la temática es libros, se establece un nuevo validado en descripción
    this.registroForm.get("tematica").valueChanges
    .subscribe(c=>{
      if(c=="libros"){
        this.registroForm.get("descripcion").addValidators(Validators.maxLength(10));
        this.registroForm.get("descripcion").updateValueAndValidity();
      }else{
        this.registroForm.get("descripcion").clearValidators();
        this.registroForm.get("descripcion").addValidators([Validators.minLength(5),Validators.required]);
        this.registroForm.get("descripcion").updateValueAndValidity();
      }
    });
  }

  guardar(){
    if(this.registroForm.invalid){
      this.error=true;
      return;
    }
    this.buscadorService.altaItem(this.item())
    .subscribe({
      next:data=>alert("Nuevo elemento almacenado"),
      error:err=>alert("No se pudo añadir, URL repetida")
    });
  }
}
