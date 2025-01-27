import { Directive, HostListener, input, output } from '@angular/core';

// import the angular material modules
import { MatSnackBar } from '@angular/material/snack-bar';

// import the translate service
import { TranslateService } from '@ngx-translate/core';

import { filter, first, switchMap } from 'rxjs';

// import the post DTO
import { PostDto } from '../dto/post.dto';

// import the API Service
import { ApiService } from '../services/api.service';

import {
  CustomConfirmDialog,
  CustomConfirmDialogService,
} from '../services/custom-confirm-dialog.service';

@Directive({
  selector: '[appPostDelete]',
  standalone: true,
})
export class PostDeleteDirective {
  public id = input.required<string>({ alias: 'appPostDelete' });
  public deleted = output<string>();

  constructor(
    private apiService: ApiService<PostDto>,
    private confirm: CustomConfirmDialogService,
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {}

  // Decorator that declares a DOM event to listen for, and provides a handler method to run when that event occurs.
  @HostListener('click')
  public onClick(): void {
    this.confirm
      .openCustomConfirmDialog(CustomConfirmDialog.Delete)
      .pipe(
        first(),
        filter((res) => !!res),
        switchMap(() => this.apiService.delete(this.id()))
      )
      .subscribe({
        next: () => {
          // Emits a new value to the output.
          this.deleted.emit(this.id());
          // Opens a snackbar with a success message.
          this.snackBar.open(
            this.translate.instant('response.delete.success'),
            this.translate.instant('uni.close')
          );
        },
        error: () => {
          // Opens a snackbar with a error message.
          this.snackBar.open(
            this.translate.instant('response.delete.failed'),
            this.translate.instant('uni.close')
          );
        },
      });
  }
}
