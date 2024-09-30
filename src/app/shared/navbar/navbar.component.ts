import { Component } from '@angular/core';
import { NgTemplateOutlet, CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

// import the angular material modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

// import the angular logo
import { LogoComponent } from '../logo/logo.component';

@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrl: './navbar.component.scss',
   standalone: true,
   imports: [
      NgTemplateOutlet,
      CommonModule,
      RouterModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule,
      MatDividerModule,
      MatToolbarModule,
      LogoComponent,
   ],
})
export class NavbarComponent {}
