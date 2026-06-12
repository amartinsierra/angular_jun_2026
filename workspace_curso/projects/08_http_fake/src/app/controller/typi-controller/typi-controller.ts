import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/Post';
import {Comment} from '../../model/Comment'
import { TypiService } from '../../service/typi-service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-typi-controller',
  imports: [FormsModule],
  templateUrl: './typi-controller.html',
  styleUrl: './typi-controller.css',
})
export class TypiController implements OnInit{
  posts:Post[];
  comments:Comment[]=[];
  postId:number;
  constructor(private typiService:TypiService){

  }
  ngOnInit(): void {
    this.typiService.posts()
    .subscribe({
      next:r=>this.posts=r,
      error:err=>alert(err)
    });
  }
  comentarios():void{
    this.typiService.commentsByPost(this.postId)
    .subscribe({
      next: r=>this.comments=r,
      error: err=>alert()
      });
  }
}
