import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Alumno } from '../../model/Alumno';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-favoritos',

  imports: [CommonModule,FormsModule,RouterModule,MatDialogModule,MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSortHeader,
    MatButtonModule,
    MatInputModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit,AfterViewInit{
  displayedColumns: string[] = ['Email', 'Nombre', 'Nota','Curso'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource:MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>();
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  ngOnInit(): void {
    this.dataSource.data=JSON.parse(sessionStorage.getItem("favoritos"));

  }
}
