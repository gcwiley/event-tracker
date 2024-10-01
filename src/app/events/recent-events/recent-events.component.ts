import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// import angular material modules
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

// import the event service
import { EventService } from '../../services/event.service';

// import the event interface
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

   constructor(private eventService: EventService) {}

   ngOnInit(): void {
      this.getRecentEvents();
   }

   getRecentEvents(): void {
      this.eventService.getRecentEvents().then((recentEvents) => {
         this.recentEvents = recentEvents
      });
   }
}
