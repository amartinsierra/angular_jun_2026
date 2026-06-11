import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cuadro-dialogo',
  imports: [MatDialogModule],
  templateUrl: './cuadro-dialogo.html',
  styleUrl: './cuadro-dialogo.css',
})
export class CuadroDialogo {
  constructor(private dialogRef:MatDialogRef<CuadroDialogo>,
    @Inject(MAT_DIALOG_DATA) public data: { mensaje: string }
  ){}
  cerrar() {
    this.dialogRef.close();
  }
}
