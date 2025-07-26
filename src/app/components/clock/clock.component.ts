import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
   standalone: true,
   selector: 'app-clock',
   templateUrl: './clock.component.html',
   styleUrl: './clock.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [],
})
export class ClockComponent {}
