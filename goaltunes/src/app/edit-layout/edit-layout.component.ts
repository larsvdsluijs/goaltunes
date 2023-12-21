import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Player} from "../models/player";

@Component({
  selector: 'app-edit-layout',
  templateUrl: './edit-layout.component.html',
  styleUrls: ['./edit-layout.component.scss']
})
export class EditLayoutComponent implements OnInit {
  players: Player[] = [];
  activePlayers: Player[] = [];
  selectedPlayerIndex = -1;

  constructor(public dialog: MatDialog,
              public snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.players = JSON.parse(localStorage.getItem('players') || '[]');
    this.activePlayers = JSON.parse(localStorage.getItem('activePlayers') || '[]');
  }


  switchPlayers(index: number) {
    if (this.selectedPlayerIndex !== -1) {
      const temp = this.activePlayers[this.selectedPlayerIndex];
      this.activePlayers[this.selectedPlayerIndex] = this.activePlayers[index];
      this.activePlayers[index] = temp;
      localStorage.setItem('activePlayers', JSON.stringify(this.activePlayers))
      this.selectedPlayerIndex = -1;
    } else if (this.selectedPlayerIndex == index) {
      this.selectedPlayerIndex = -1;
    }
    else
      this.selectedPlayerIndex = index;
  }

}
