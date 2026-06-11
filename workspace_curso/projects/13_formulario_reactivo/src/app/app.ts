import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { validadorCuenta } from './validators/ValidadorCuenta';

@Component({
  selector: 'app-root',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit{

  error:boolean=false;
  formClients=new FormGroup({
    usuario:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required,Validators.minLength(5)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    telefono:new FormControl("",[Validators.required,Validators.pattern('[0-9]{9}')]),
    profesional:new FormControl(),
    instagram:new FormControl()
  })

  ngOnInit(): void {
    this.formClients.get("profesional").valueChanges.subscribe(p=>{
      if(p){
        this.formClients.get("instagram").setValidators([Validators.required,validadorCuenta]);
      }else{
        this.formClients.get("instagram").clearValidators();
      }
      this.formClients.get("instagram").updateValueAndValidity();
    });

  }
  procesar(){
    this.error=this.formClients.invalid;
    console.log(this.error);
    if(this.error){
      console.log("Formulario no válido!");
      return;
    }

    console.log("Formulario correctamente validado!");
  }
}
