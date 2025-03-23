import { Component } from '@angular/core';
import { BIO_COPY } from '@app/core/constants/bio.constants';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss',
})
export class BioComponent {
  public bio = BIO_COPY;
}
