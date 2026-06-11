import { Component, signal } from '@angular/core';
import { Item } from '../../model/Item';
import { HttpClient } from '@angular/common/http';
import { BuscadorService } from '../../service/buscador-service';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CuadroDialogo } from '../../components/cuadro-dialogo/cuadro-dialogo';

@Component({
  selector: 'app-alta-controller',
  imports: [FormsModule],
  templateUrl: './alta-controller.html',
  styleUrl: './alta-controller.css',
})
export class AltaController {
  item=signal<Item>({"url":"","tematica":"","descripcion":""});
  error:boolean=false;
  constructor(private buscadorService:BuscadorService,private dialog:MatDialog){}

  guardar(form:any){
    if(form.invalid){
      this.error=true;
      return;
    }
    this.buscadorService.altaItem(this.item())
    .subscribe({
      next:data=>this.dialog.open(CuadroDialogo,{
        data:{"mensaje":"Nuevo elemento almacenado"}
      }) ,
      error:err=> this.dialog.open(CuadroDialogo,{
        data:{"mensaje":"No se pudo añadir, URL repetida"}
      }) 
    });
  }
}
