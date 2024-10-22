import { Component } from '@angular/core';
import { VERSION } from '@angular/material/core';

@Component({
   selector: 'app-footer',
   templateUrl: './footer.component.html',
   styleUrl: './footer.component.scss',
   standalone: true,
   imports: [],
})
export class FooterComponent {
   version = VERSION.full;

   year = new Date().getFullYear();
}
