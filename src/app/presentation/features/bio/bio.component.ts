import { Component } from '@angular/core';
import { BIO_COPY } from '@app/core/constants/bio.constants';
import { AvatarComponent } from '@app/presentation/components/avatar/avatar.component';
@Component({
  selector: 'app-bio',
  imports: [AvatarComponent],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss',
})
export class BioComponent {
  public bio = BIO_COPY;
}
