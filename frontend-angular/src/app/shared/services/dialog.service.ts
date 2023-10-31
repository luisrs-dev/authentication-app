import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {}

  openDialog(title: string, message: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '250px',
      width: '600px',
      data: { title, message },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('La ventana de diálogo se cerró.');
    });
  }
}
