import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, DestroyRef, OnDestroy, OnInit, ViewChild, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { combineLatest, debounceTime, filter, first, single } from 'rxjs';
import { ROUTE_DEFINITION } from '../../shared/constants/route-definition.constant';
import { PostDeleteDirective } from '../../shared/directives/post-delete.directive';
import { PostDto } from '../../shared/dto/post.dto';
import { getParamPage } from '../../shared/rxjs/get-param-page';
import { getParamQuery } from '../../shared/rxjs/get-param-query';
import { getParamSort } from '../../shared/rxjs/get-param-sort';
import { ApiService } from '../../shared/services/api.service';
import { BreadcrumbsPortalService } from '../../shared/services/breadcrumbs-portal.service';
import { RxdbProvider } from '../../shared/services/db.service';

@Component({
   selector: 'app-post-list',
   templateUrl: './post-list.component.html',
   styleUrl: './post-list.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [
      RouterLink,
      LocalizeRouterModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatMenuModule,
      MatIconModule,
      MatButtonModule,
      MatTooltipModule,
      MatFormFieldModule,
      FormsModule,
      TranslateModule,
      PortalModule,
      PostDeleteDirective,
   ],
})
export class PostListComponent implements OnInit, OnDestroy {
   @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;

   public readonly ROUTE_DEFINITION = ROUTE_DEFINITION;
   public readonly displayedColumns: string[] = ['id', 'title', 'actions'];
   public readonly pageSizeOptions = [5, 10, 25, 100];

   private destroyRef = inject(DestroyRef);
   public data = signal<PostDto[]>([]);
   public totalCount = signal(0);

   public query = signal('');
   public pageSize = signal(5);
}
