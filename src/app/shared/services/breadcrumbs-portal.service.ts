// the 'BreadcrumbsPortalService' is designed to manage and share information about the currently active "portal" within your application. It acts as a central communication point for components to set and react to changes in the active portal

// import 'Injectable' which is used to make this class a service injectable into other components
import { Injectable } from '@angular/core';
// imports 'Subject', a core part of RxJS used for reactive programming and managing streams of data
import { Subject } from 'rxjs';
// imports a type definition called Portal that represents dirrent portal types your application migt use.
import { Portal } from '../dto/portal.dto';

// This decorator marks the class as an injectable service within Angular. 'providedIn: 'root'' indicates that a single instance of this service will be created and available throughout your application.
@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsPortalService {
  // declares a private property named activePortal within your service
  // the private keyword means it can only be accessed from inside this service class. 
  
  private activePortal = new Subject<Portal>(); // creates a new instance of the Subject class
  // add more here

  public readonly portal$ = this.activePortal.asObservable();

  public setPortal(portal: Portal): void {
    this.activePortal.next(portal);
  }
}

// this code facilitates a dynamic way to manage and display different parts of your application's UI by enabling communication about the currently active "Portal" amoung various components. This promotes flexible and modular architecture within your application. 
