import { Component } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog';
import { AddPlayerComponent} from "../add-player/add-player.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    public dialog: MatDialog,
    public router: Router) {
  }

  isMenuOpen = false;

  goTo(url: string) {
    this.router.navigate([url])
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
