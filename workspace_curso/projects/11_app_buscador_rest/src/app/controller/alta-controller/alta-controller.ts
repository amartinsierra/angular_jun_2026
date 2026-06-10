import { Component, signal } from '@angular/core';
import { Item } from '../../model/Item';
import { HttpClient } from '@angular/common/http';
import { BuscadorService } from '../../service/buscador-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alta-controller',
  imports: [FormsModule],
  templateUrl: './alta-controller.html',
  styleUrl: './alta-controller.css',
})
export class AltaController {
  item=signal<Item>({"url":"","tematica":"","descripcion":""});
  error:boolean=false;
  constructor(private buscadorService:BuscadorService){}

  guardar(form:any){
    if(form.invalid){
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
