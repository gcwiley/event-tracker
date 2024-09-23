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

@Component({
   selector: 'app-event-form',
   templateUrl: './event-form.component.html',
   styleUrl: './event-form.component.scss',
   standalone: true,
   imports: [],
})
export class EventFormComponent {}
