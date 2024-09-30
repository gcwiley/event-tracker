import { Routes } from '@angular/router';

// import the page components
import { AboutPageComponent, EventCreatePageComponent, HomepageComponent, NotFoundPageComponent, SigninPageComponent } from './pages/index';

export const routes: Routes = [
   // home page
   { path: '', component: HomepageComponent },
   // sign in page
   { path: 'signin', component: SigninPageComponent },
   // create event page
   { path: 'create-event', component: EventCreatePageComponent },
   // about page
   { path: 'about', component: AboutPageComponent },
   // not found page - MUST BE VERY LAST!
   { path: '**', component: NotFoundPageComponent },
];
