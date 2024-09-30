import { Component, HostBinding } from '@angular/core';

@Component({
   selector: 'app-logo',
   templateUrl: './logo.component.html',
   styleUrl: './logo.component.scss',
   standalone: true,
   imports: [],
})
export class LogoComponent {
   // use the host binding decorator
   @HostBinding('attr.aria-hidden')
   ariaHidden = true;
}
