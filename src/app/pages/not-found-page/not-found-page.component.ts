import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import angular material modules
import { MatButtonModule } from '@angular/material/button';

// import the shared components
import { NavbarComponent, FooterComponent } from '../../shared';

@Component({
   selector: 'app-not-found-page',
   templateUrl: './not-found-page.component.html',
   styleUrl: './not-found-page.component.scss',
   standalone: true,
   imports: [CommonModule, RouterModule, MatButtonModule, NavbarComponent, FooterComponent],
})
export class NotFoundPageComponent {}
