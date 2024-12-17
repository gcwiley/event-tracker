import { Injectable } from '@angular/core';
// this line import the meta and title services. These services provide methods to manipulate
// the <head> section of the HTML document
// - Meta: This service allows you to add, update, or remove meta tags. Meta tags provide
// information about the HTML document, such as description, keywords, and author.
// search engines use these tags to index the page correctly
// - Title: this service allows you to set the title of the current HTML document, which
// appears in the browser's title bar or tab.
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PageOptions } from '../dto/page.dto';

@Injectable({
   providedIn: 'root',
})
export class CustomTitleStrategyService extends TitleStrategy {
   private readonly siteName = 'RDXB demo';

   constructor(private translate: TranslateService, private title: Title, private meta: Meta) {
      super();
   }
   //  fix this
   public updateTitle(snapshot: RouterStateSnapshot): void {
      const title = this.buildTitle(snapshot);
      if (title) {
         const parsedData = this.parseTitleData(title);
      }
   }
}
