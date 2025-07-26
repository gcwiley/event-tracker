import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
   standalone: true,
   selector: 'app-event-description',
   templateUrl: './event-description.component.html',
   styleUrl: './event-description.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [],
})
export class EventDescriptionComponent {}
