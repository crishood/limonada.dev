import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MENU_CONSTANTS } from '@app/core/constants/menu.constants';
import { RouterModule } from '@angular/router';
import { IMAGES_CONSTANTS } from '@app/core/constants/images.constants';
import { APP_CONSTANTS } from '@app/core/constants/app.constants';
@Component({
  selector: 'limonada-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public menu = MENU_CONSTANTS;
  public logo = IMAGES_CONSTANTS.LOGO;
  public linkedin = IMAGES_CONSTANTS.LINKEDIN;
  public github = IMAGES_CONSTANTS.GITHUB;
  public substack = IMAGES_CONSTANTS.SUBSTACK;
  public appConstants = APP_CONSTANTS;
}
