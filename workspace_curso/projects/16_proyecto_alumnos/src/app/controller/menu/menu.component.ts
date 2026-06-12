import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, RouterModule, Router } from '@angular/router';



@Component({
  selector: 'app-menu',

  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  constructor(private router:Router){

  }
  ngOnInit(): void {
    this.router.navigate(["/alta"]);
  }

}
