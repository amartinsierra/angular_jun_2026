import { Component, OnInit, signal } from '@angular/core';
import { Post } from '../../model/Post';
import {Comentario} from '../../model/Comment'
import { TypiService } from '../../service/typi-service';
import { FormsModule } from '@angular/forms';

import { TableChild } from '../../components/table-child/table-child';
import { ComboChild } from '../../components/combo-child/combo-child';

@Component({
  selector: 'app-typi-controller',
  imports: [FormsModule,TableChild,ComboChild],
  templateUrl: './typi-controller.html',
  styleUrl: './typi-controller.css',
})
export class TypiController implements OnInit{
  posts=signal<Post[]>([]);
  comentarios=signal<Comentario[]>([]);
  constructor(private typiService:TypiService){

  }
  ngOnInit(): void {
    this.typiService.posts()
    .subscribe({
      next:r=>this.posts.set(r),
      error:err=>alert(err)
    });
  }
  comentariosPost(postId:number):void{
    this.typiService.commentsByPost(postId)
    .subscribe({
      next: r=>this.comentarios.set(r),
      error: err=>alert()
      });
  }
}
