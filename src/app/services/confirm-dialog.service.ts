import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

// import the confirm dialog component
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  constructor(private dialog: MatDialog) {}

  public open(title: string, content: string): Observable<boolean> {
    // opens the dialog
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      // sets the width of the dialog
      width: 'sm',
      // the data being injected into the child component
      data: { title, content },
    });
    return dialogRef.afterClosed();
  }
}
