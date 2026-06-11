import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { form, required, minLength, email, pattern, validate, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [FormField],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

    error:boolean=false;
    //inicialización de controles
    model = signal({
      usuario: '',
      email: '',
      password: '',
      telefono: '',
      profesional: false,
      instagram: ''
    });

  formClients = form(this.model, (p) => {
    required(p.usuario);
    minLength(p.usuario, 3);

    required(p.email);
    email(p.email);

    required(p.password);
    minLength(p.password, 6);

    required(p.telefono);
    pattern(p.telefono, /^[0-9]{9}$/);

    required(p.instagram, {
      when: ({ valueOf }) => valueOf(p.profesional)
    });

    validate(p.instagram, ({ value, valueOf }) => {
      if (!valueOf(p.profesional)) {
        return undefined;
      }

      const instagram = value()?.trim();
      if (!instagram) {
        return undefined;
      }

      if (instagram.includes('@')) {
        return undefined;
      }

      return {
        kind: 'invalido',
        message: 'Debe incluir una @'
      };
    });
  });

  private readonly usuarioValue = computed(() => this.model().usuario);

  constructor() {
    effect(() => {
      const usuario = this.usuarioValue();
      //actualiza el campo el email con el valor del usuario en caso de qe sean diferentes
      this.model.update((prev) => (prev.email === usuario ? prev : { ...prev, email: usuario }));
    });
  }

  formInvalid = computed(() => {
    return (
      this.formClients.usuario().invalid() ||
      this.formClients.email().invalid() ||
      this.formClients.password().invalid() ||
      this.formClients.telefono().invalid() ||
      this.formClients.instagram().invalid()
    );
  });

  procesar() {

    if (this.formInvalid()) {
	    this.error=true;
      console.log('Formulario inválido');
      return;
    }
    console.log('Formulario válido:', this.model());
  }
}
