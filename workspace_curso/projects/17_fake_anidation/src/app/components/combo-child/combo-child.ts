import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Post } from '../../model/Post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-combo-child',
  imports: [FormsModule],
  templateUrl: './combo-child.html',
  styleUrl: './combo-child.css',
})
export class ComboChild {
  @Input() posts=signal<Post[]>([]);
  @Output() seleccion:EventEmitter<number>=new EventEmitter<number>();
  postSeleccionado=signal<number>(0);
  seleccionPost(){
    this.seleccion.emit(this.postSeleccionado());
  }
}
