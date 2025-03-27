import { Component, inject } from '@angular/core';
import { MENU_CONSTANTS } from '@app/core/constants/menu.constants';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'ch-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class Navbar {
  public menu = MENU_CONSTANTS;
  public router = inject(Router);
}
