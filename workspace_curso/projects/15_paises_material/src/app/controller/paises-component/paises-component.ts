import { AfterViewInit, Component, OnInit, signal, ViewChild } from '@angular/core';
import { PaisesService } from '../../service/paises.service';
import { Pais } from '../../model/Pais';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-paises',
  imports: [CommonModule,FormsModule,MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSortHeader,
    MatButtonModule,
    MatInputModule],
  templateUrl: './paises-component.html',
  styleUrl: './paises-component.css'
})
export class PaisesComponent implements OnInit,AfterViewInit{
  paises=signal<Pais[]>([]);
  continente=signal<string>("- Continente -");
  continentes=signal<string[]>([]);
  displayedColumns: string[] = ['Pais', 'Continente', 'Población','Bandera'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource:MatTableDataSource<Pais> = new MatTableDataSource<Pais>();
  constructor(private paisesService:PaisesService){}
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  ngOnInit(): void {
    this.paisesService.getContinentes().subscribe(data=>this.continentes.set(data));
  }
  cargarPaises():void{
    this.paisesService.getPaisesContinente(this.continente()).subscribe(data=>{
      this.paises.set(data);
      this.dataSource.data=this.paises();
    });
  }

}
