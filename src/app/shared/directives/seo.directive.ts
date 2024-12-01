import { DOCUMENT } from '@angular/common';
import { Directive, Inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSeo]',
  standalone: true,
})
export class SeoDirective {
  constructor() {}
}
