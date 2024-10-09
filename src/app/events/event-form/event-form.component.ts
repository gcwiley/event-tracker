import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// import angular material modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// import the event service
import { EventService } from '../../services/event.service';

// import the event interface
import { Event } from '../../types/event.interface';

@Component({
   selector: 'app-event-form',
   templateUrl: './event-form.component.html',
   styleUrl: './event-form.component.scss',
   standalone: true,
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
   ],
})
export class EventFormComponent implements OnInit {
   // inject the form builder
   formBuilder = inject(FormBuilder);

   public mode = 'create';
   private id!: string | null;
   private event!: Event;

   // inject the event service
   constructor(private router: Router, public route: ActivatedRoute, private eventService: EventService) {}

   // create the event form
   eventForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      countryLocation: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      summary: ['', Validators.required],
      assessment: ['', Validators.required],
   });

   ngOnInit(): void {
      // find out if we have an id in the url
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
         if (paramMap.has('id')) {
            (this.mode = 'edit'), (this.id = paramMap.get('id'));
            this.eventService.getEventById(this.id).then((event) => {
               this.event = event;
               // overrides the value of initial form controls
               this.eventForm.setValue({
                  // set the value of the form controls
                  title: this.event.title,
                  category: this.event.category,
                  countryLocation: this.event.countryLocation,
                  latitude: this.event.latitude,
                  longitude: this.event.longitude,
                  summary: this.event.summary,
                  assessment: this.event.assessment,
               });
            });
         } else {
            this.mode = 'create';
            this.id = null;
         }
      });
   }

   // saves new event to database
   onSaveEvent() {
      if (this.mode === 'create') {
         this.eventService.createEvent(this.eventForm.value).then(() => {
            // navigates user back to the home page
            this.router.navigateByUrl('/admin');
         });
      } else {
         this.eventService.updateEvent(this.id!, this.eventForm.value).then(() => {
            // navigates user back to the home page
            this.router.navigateByUrl('/');
         });
      }
   }
}
