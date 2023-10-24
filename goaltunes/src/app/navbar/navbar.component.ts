import { Component } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog';
import { AddPlayerComponent} from "../add-player/add-player.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(AddPlayerComponent, {
      width: '90%',
      height: '50%'
    })
  }
}
