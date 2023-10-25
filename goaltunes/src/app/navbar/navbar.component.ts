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

  goTo(url: string) {
    this.router.navigate([url])
  }
  addPlayerDialog(): void {
    this.dialog.open(AddPlayerComponent, {
      width: '90%',
      height: '50%'
    })
  }
}
