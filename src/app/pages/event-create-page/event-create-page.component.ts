import { Component } from '@angular/core';

// import the shared components
import { NavbarComponent, FooterComponent } from '../../shared/index';

// import the event components
import { EventFormComponent, RecentEventsComponent } from '../../events/index';

@Component({
   selector: 'app-event-create-page',
   templateUrl: './event-create-page.component.html',
   styleUrl: './event-create-page.component.scss',
   standalone: true,
   imports: [NavbarComponent, FooterComponent, EventFormComponent, RecentEventsComponent],
})
export class EventCreatePageComponent {}
