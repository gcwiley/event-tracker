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
   public mode = 'create';

   // inject the form builder
   formBuilder = inject(FormBuilder);

   constructor(private router: Router, public route: ActivatedRoute, private eventService: EventService) {}

   // create the event form
   eventForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      country: ['', Validators.required],
      summary: ['', Validators.required],
   });

   ngOnInit(): void {
      this.onSaveEvent();
   }

   onSaveEvent(): void {
      if (this.mode === 'create') {
         this.eventService
            .addEvent(this.eventForm.value)
            .then(() => {
               // navigate user back to homepage
               this.router.navigateByUrl('/');
            })
            .catch(() => {
               console.log('There was an error!');
            });
      } else {
         this.eventService;
      }
   }
}
