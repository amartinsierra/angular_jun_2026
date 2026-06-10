import { Component, signal } from '@angular/core';
import { BuscadorService } from '../../service/buscador-service';
import { Item } from '../../model/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar-controller',
  imports: [FormsModule],
  templateUrl: './buscar-controller.html',
  styleUrl: './buscar-controller.css',
})
export class BuscarController {
  items=signal<Item[]>([]);
  tematicaSel=signal<string>("");
  constructor(private itemsService:BuscadorService){}

  buscar(){
    this.itemsService.itemsPorTematica(this.tematicaSel()).subscribe({
      next:data=>this.items.set(data),
      error:err=>alert(`${err}. No se pudo mostrar la información`)
    });
  }

  eliminar(url:string){
    this.itemsService.eliminarPorUrl(url).subscribe({
      next:data=>{
        alert(`se elimino ${data.url} de ${data.tematica}`);
        this.buscar();
      },
      error:err=>alert(`${err}. No se pudo eliminar`)
    });
  }
}
