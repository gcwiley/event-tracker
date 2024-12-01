import { CdkPortal, PortalModule } from '@angular/cdk/portal';
// import the core angular
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';

// import form modules
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// import angular material modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Router, RouterLink } from '@angular/router';

// comment
import {
  LocalizeRouterModule,
  LocalizeRouterService,
} from '@gilsdav/ngx-translate-router';

// comment
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { Observable, first } from 'rxjs';

import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

import { ROUTE_DEFINITION } from '../../shared/constants/route-definition.constant';

import { PostDto, PostInputDto } from '../../shared/dto/post.dto';

import { CanComponentDeactivate } from '../../shared/guards/can-deactivate-guard.service';

// import the services
import { ApiService } from '../../shared/services/api.service';
import { BreadcrumbsPortalService } from '../../shared/services/breadcrumbs-portal.service';
import {
  CustomConfirmDialog,
  CustomConfirmDialogService,
} from '../../shared/services/custom-confirm-dialog.service';

@Component({
  standalone: true,
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    PortalModule,
    TranslateModule,
    ConfirmDialogComponent,
    RouterLink,
    LocalizeRouterModule,
  ],
})
export class PostCreateComponent
  implements OnDestroy, OnInit, CanComponentDeactivate
{
  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;
  private destroyRef = inject(DestroyRef);
  private fb = inject(FormBuilder);
  public readonly ROUTE_DEFINITION = ROUTE_DEFINITION;

  // create the form
  public form = this.fb.group({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.min(3)],
    }),
    body: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.min(3)],
    }),
  });

  constructor(
    private apiService: ApiService<PostDto>,
    private breadcrumbsPortalService: BreadcrumbsPortalService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
    private lr: LocalizeRouterService,
    private snackBar: MatSnackBar,
    private router: Router,
    private confirm: CustomConfirmDialogService
  ) {}

  public canDeactivate(): boolean | Observable<boolean> {
    return (
      this.form.pristine ||
      this.confirm.openCustomConfirmDialog(CustomConfirmDialog.UnsavedWork)
    );
  }

  // A callback method that is invoked immediately
  public ngOnInit(): void {
    this.breadcrumbsPortalService.setPortal(this.portalContent);
    setTimeout(() => this.cdr.detectChanges());
  }

  // A callback method that performs custom clean-up, invoked immediately before a directive, pipe, or service instance is destroyed.
  public ngOnDestroy(): void {
    this.portalContent?.detach();
  }

  // submits a new post
  public onSubmit() {
    this.apiService
      .create(this.form.value as PostInputDto)
      .pipe(first())
      .subscribe({
        next: (post) => {
          // resets the form
          this.form.reset(post);
          // displays a message on the snackbar
          this.snackBar.open(
            this.translate.instant('response.create.success'),
            this.translate.instant('uni.close')
          );
          const translatedRoute = this.lr.translateRoute('/');
          // navigates back to homepage
          this.router.navigate([translatedRoute]);
        },
        error: () => {
          this.snackBar.open(
            this.translate.instant('response.create.failed'),
            this.translate.instant('uni.close')
          );
        },
      });
  }

  // resets the post form - clears form
  public onReset(event: Event): void {
    event.preventDefault();
    this.form.reset();
  }
}
