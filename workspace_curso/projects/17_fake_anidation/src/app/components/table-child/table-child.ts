import { Component, Input, signal } from '@angular/core';
import { Comentario } from '../../model/Comment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-child',
  imports: [FormsModule],
  templateUrl: './table-child.html',
  styleUrl: './table-child.css',
})
export class TableChild {
  @Input() comentarios=signal<Comentario[]>([]);

}
