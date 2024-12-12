import { DOCUMENT } from '@angular/common';
import { Directive, Inject, OnInit, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { VERSION } from '../../../environments/version';

@Directive({
  selector: '[appSeo]',
  standalone: true,
})
export class SeoDirective implements OnInit {
  private readonly siteName = 'RXDB demo';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta,
    private router: Router,
    private renderer: Renderer2
  ) {}

  public ngOnInit(): void {
    this.meta.updateTag({ name: 'author', content: VERSION.author.name });
    this.meta.updateTag({ name: 'revised', content: VERSION.date });
  }
}
