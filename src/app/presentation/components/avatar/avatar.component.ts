import { Component, input } from '@angular/core';
import { IMAGES_CONSTANTS } from '@app/core/constants/images.constants';
import { Bio } from '@app/core/models/bio.model';
@Component({
  selector: 'limonada-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  public bio = input<Bio>();
  public avatar = IMAGES_CONSTANTS.AVATAR;
}
