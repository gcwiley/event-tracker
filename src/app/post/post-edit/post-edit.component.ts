import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
   selector: 'app-post-edit',
   templateUrl: './post-edit.component.html',
   styleUrl: './post-edit.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [],
})
export class PostEditComponent {}
