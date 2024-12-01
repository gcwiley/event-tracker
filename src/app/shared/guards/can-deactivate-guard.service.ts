// This code defines a guard service. The primary purpose of this guard is to
// determine whether a component can be deactivated, such as when a user navigates away from it
// this is crucial for scenarios like preventing data loss when the user has unsaved changes.


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// defines an interface. This interface has a single method, 'canDeactivate()'
// which is expected to return either a boolean value or an Observable<boolean>

// any component that wants to participate in this deactivation guard mechanism needs to
// implement this interface
export interface CanComponentDeactivate {
  canDeactivate(): Observable<boolean> | boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuardService {
  public canDeactivate(
    component: CanComponentDeactivate
  ): boolean | Observable<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

// Imagine this guard as a gatekeeper before you leave a page. It asks the page, "Are you okay with being closed? Do you have any unsaved work?". If the page says "Yes, I'm okay" (by returning true or an Observable that resolves to true), the guard allows you to leave. If the page says "No, wait!" (by returning false or an Observable that resolves to false), the guard prevents you from leaving and might show a confirmation dialog to the user.
