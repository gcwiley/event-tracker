import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// import angular material modules
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// import the shared components
import { NavbarComponent, ClassificationBannerComponent, AnnouncementBannerComponent, FooterComponent } from '../../shared';

@Component({
   selector: 'app-signin-page',
   templateUrl: './signin-page.component.html',
   styleUrl: './signin-page.component.scss',
   standalone: true,
   imports: [
      CommonModule,
      ReactiveFormsModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatButtonModule,
      MatIconModule,
      NavbarComponent,
      AnnouncementBannerComponent,
      ClassificationBannerComponent,
      FooterComponent,
   ],
})
export class SigninPageComponent {
   year = new Date().getFullYear();

   formBuilder = inject(FormBuilder);

   // inject the router and the auth service
   constructor(private router: Router) {}

   // create the signin form with email and password fields
   signinForm = this.formBuilder.group({
      email: [null, Validators.required, Validators.email],
      password: [null, Validators.required],
   });

   // Sign in with email and password
   // if successful, navigate admin to the main page
   onSubmitSignIn() {}
}
