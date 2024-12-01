// this code defines a custom error handler service in an angular application.
// It's primary purpose is to catch and handle errors that occur during the application's runtime

import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class CustomErrorHandlerService {
  constructor(
    private ngZone: NgZone,
    private snackbar: MatSnackBar,
    private translate: TranslateService
  ) {}

  // intercepts errors that occur in the application
  public handleError(error: unknown): void {
    this.ngZone.run(() => {
      // displays a user friendly error message via a snackbar
      this.snackbar.open(
        this.translate.instant('error.unexpected-exception'),
        'danger'
      );
    });
    // re-throws the error to allow further processing or display a generic error message
    throw error;
  }
}
