import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo',
  imports: [MatDialogModule],
  templateUrl: './dialogo.html',
  styleUrl: './dialogo.css',
})
export class Dialogo {
  constructor(private dialogRef:MatDialogRef<Dialogo>,
    @Inject(MAT_DIALOG_DATA) public data: { mensaje: string }
  ){}
  cerrar() {
    this.dialogRef.close();
  }

}
