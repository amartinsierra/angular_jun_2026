import { AbstractControl, ValidationErrors } from "@angular/forms";

export function validadorCurso(control: AbstractControl): ValidationErrors | null {
  const value:string = control.value;

  if (!value) {
    return null; // no actua si está vacío, eso se controla con Validators.required
  }


  if(!value.toLowerCase().includes("avanzado")){
    return null; //si es válido, se debe devolver null
  }
  return {invalido:true}; //si no es válido, se devuelve un objeto
}
