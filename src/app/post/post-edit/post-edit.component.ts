import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-post-edit',
  standalone: true,
  imports: [],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostEditComponent {

}
