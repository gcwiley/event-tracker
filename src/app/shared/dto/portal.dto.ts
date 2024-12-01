// 'CompoentPortal' is used to render an Angular component at a specific location

// 'DomPortal' is used to render a raw DOM element at a specific location

// 'TemplatePortal' is used to render an Angular template at a specific location
import { ComponentPortal, DomPortal, TemplatePortal } from '@angular/cdk/portal';

export type Portal = TemplatePortal | ComponentPortal<unknown> | DomPortal;