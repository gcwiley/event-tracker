import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
   selector: 'app-homepage',
   templateUrl: './homepage.component.html',
   styleUrl: './homepage.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [],
})
export class HomepageComponent {}
