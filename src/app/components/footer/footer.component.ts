import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
<<<<<<< HEAD
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
=======
   standalone: true,
   selector: 'app-footer',
   templateUrl: './footer.component.html',
   styleUrl: './footer.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [],
})
export class FooterComponent {}
>>>>>>> 7486c809457dec68412bd845adb659c8ec3338e6
