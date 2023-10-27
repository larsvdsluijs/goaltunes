import { Component } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog';
import { AddPlayerComponent} from "../add-player/add-player.component";
import { Router } from '@angular/router';
import {SelectActivePlayersComponent} from "../select-active-players/select-active-players.component";

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

  openDialog() {
    this.dialog.open(SelectActivePlayersComponent, {
      width: '90%',
      height: '85%',
      disableClose: true
    });

    this.isMenuOpen = false;
  }


  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
