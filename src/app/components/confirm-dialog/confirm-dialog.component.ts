import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

// angular material
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
// Import TranslateModule for translation support
import { TranslateModule } from '@ngx-translate/core';

/**
 * Interface defining the data structure for the confirm dialog.
 */
export interface ConfirmDialogData {
  // Title of the dialog
  title: string;
  // Content/message displayed in the dialog
  content: string;
}

@Component({
  standalone: true,
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, 
  imports: [MatDialogModule, MatButtonModule, TranslateModule], 
})
export class ConfirmDialogComponent {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}
}
