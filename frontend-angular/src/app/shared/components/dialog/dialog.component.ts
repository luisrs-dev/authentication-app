import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  template: `
    <!-- <h1>Mensaje Personalizado</h1>
    <p>{{ data.message }}</p> -->
    <div style="padding:5%;" >
    <h1 mat-dialog-title>{{ data.title }}</h1>
    <div mat-dialog-content>
      <p>{{ data.message }}</p>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-raised-button (click)="closeDialog()"
      style="padding:2%;background-color: white;font-size:14px;font-weight:400;border-with:1px;"
      >Entendido</button>
    </div>
    </div>
  `,
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; message: string },
    public dialogRef: MatDialogRef<DialogComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
