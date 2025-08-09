import { Injectable, inject } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';

// angular material
import { MatDialog } from '@angular/material/dialog';

// confirm dialog
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  // inject dependencies
  private dialog = inject(MatDialog);

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
