// Import necessary modules from Angular core
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

// Import Angular Material modules for dialog and button functionality
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

/**
 * Component representing a confirm dialog.
 */
@Component({
  // Selector for the component
  selector: 'app-confirm-dialog',
  // Path to the component's HTML template
  templateUrl: './confirm-dialog.component.html',
  // Path to the component's SCSS stylesheet
  styleUrl: './confirm-dialog.component.scss',
  // Configures the component to use the 'OnPush' change detection strategy
  changeDetection: ChangeDetectionStrategy.OnPush, 
  // Imports necessary modules for the component
  imports: [MatDialogModule, MatButtonModule, TranslateModule], 
})
export class ConfirmDialogComponent {
  /**
   * Constructor for the ConfirmDialogComponent.
   * @param data Data to be displayed in the dialog (title and content).
   * @param dialogRef Reference to the dialog instance.
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}
}
