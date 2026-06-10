import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-controller',
  imports: [RouterModule],
  templateUrl: './menu-controller.html',
  styleUrl: './menu-controller.css',
})
export class MenuController implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.navigate(["/buscar"]);
  }

}
