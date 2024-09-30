import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// import the shared components
import { NavbarComponent, AnnouncementBannerComponent, ClassificationBannerComponent, FooterComponent } from '../../shared';

// import the event components
import { EventGridComponent, RecentEventsComponent } from '../../events/index';

@Component({
   selector: 'app-homepage',
   templateUrl: './homepage.component.html',
   styleUrl: './homepage.component.scss',
   standalone: true,
   imports: [
      NavbarComponent,
      AnnouncementBannerComponent,
      ClassificationBannerComponent,
      FooterComponent,
      EventGridComponent,
      RecentEventsComponent,
   ],
})
export class HomepageComponent {}
