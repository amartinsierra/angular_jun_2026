import { Component, OnInit, signal } from '@angular/core';
import { PaisesService } from '../../service/paises.service';
import { Pais } from '../../model/Pais';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paises',
  imports: [CommonModule,FormsModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent implements OnInit{
  paises:Pais[]=[];
  continente:string="-Continente-";
  continentes:string[];
  constructor(private paisesService:PaisesService){}
  ngOnInit(): void {
    this.paisesService.getContinentes().subscribe(data=>this.continentes=data);
  }
  cargarPaises(event):void{
    this.paisesService.getPaisesContinente(event.target.value).subscribe(data=>this.paises=data);
  }

}
