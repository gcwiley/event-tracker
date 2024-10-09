import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// import angular material modules
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

// import the event service
import { EventService } from '../../services/event.service';

import { Event } from '../../types/event.interface';

@Component({
   selector: 'app-recent-events',
   templateUrl: './recent-events.component.html',
   styleUrl: './recent-events.component.scss',
   standalone: true,
   imports: [CommonModule, MatListModule, MatIconModule],
})
export class RecentEventsComponent implements OnInit {
   recentEvents!: Event[];

   // this code tells angular to inject an instance of "eventService" into the component and store it in a private property named 'eventService' when
   // the component is created. This makes the eventService available for use within the component to interact with event-related data or operations.
   constructor(private eventService: EventService) {}

   // a callback method the is invoked immediately
   ngOnInit(): void {
      this.getRecentEvents();
   }

   // get all recent events
   getRecentEvents(): void {
      this.eventService.getRecentEvents().then((recentEvents) => {
         this.recentEvents = recentEvents;
      });
   }
}
