import { AbstractControl, ValidationErrors } from "@angular/forms";

export function validadorUrl(control: AbstractControl): ValidationErrors | null{
  const value:string = control.value;
  if (!value) {
    return null; // no actua si está vacío, eso se controla con Validators.required
  }
  if(value.startsWith("http")){
    return null;
  }
  return {invalido:true,mensaje:"Debe comenzar por HTTP"}
}
