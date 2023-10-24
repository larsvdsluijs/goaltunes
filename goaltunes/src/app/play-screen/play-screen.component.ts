import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {AddPlayerComponent} from "../add-player/add-player.component";

@Component({
  selector: 'app-play-screen',
  templateUrl: './play-screen.component.html',
  styleUrls: ['./play-screen.component.scss']
})
export class PlayScreenComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddPlayerComponent, {
      width: '90%',
      height: '50%'
    })
  }
}
