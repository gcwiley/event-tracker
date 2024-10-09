import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

// import the angular material modules
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// import the event service
import { EventService } from '../../services/event.service';

import { Event } from '../../types/event.interface';

@Component({
   selector: 'app-event-grid',
   templateUrl: './event-grid.component.html',
   styleUrl: './event-grid.component.scss',
   standalone: true,
   imports: [CommonModule, MatGridListModule, MatCardModule, MatIconModule, MatButtonModule],
})
export class EventGridComponent implements OnInit {
   // create the member variables
   events!: Event[];

   // set up the grid list demensions
   cols = 4;
   rowHeight = '1:1'; // row height
   gutterSize = '0px';

   // set up the grid list dimensions
   colspan = 1;
   rowspan = 1;

   // inject the event service and breakpoint observer
   constructor(private eventService: EventService, private breakpointObserver: BreakpointObserver) {}

   // A callback method that is invoked immediately
   ngOnInit(): void {
      this.getEvents();
      this.layoutChanges();
   }

   // responsive code
   layoutChanges(): void {
      this.breakpointObserver
         .observe([Breakpoints.TabletPortrait, Breakpoints.TabletLandscape, Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
         .subscribe((result) => {
            const breakpoints = result.breakpoints;
            // check to see if viewport is in table portrait mode
            if (breakpoints[Breakpoints.TabletPortrait]) {
               this.cols = 1;
            } else if (breakpoints[Breakpoints.HandsetPortrait]) {
               this.cols = 1;
            } else if (breakpoints[Breakpoints.HandsetLandscape]) {
               this.cols = 1;
            } else if (breakpoints[Breakpoints.TabletLandscape]) {
               this.cols = 2;
            }
         });
   }

   // get all events from database
   getEvents(): void {
      this.eventService.getAllEvents().then((events) => {
         this.events = events;
      }).catch((error) => {
         console.log(error)
      })
   }
}
