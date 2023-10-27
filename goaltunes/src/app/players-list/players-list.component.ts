import {Component, OnInit} from '@angular/core';
import {AddPlayerComponent} from "../add-player/add-player.component";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

interface Player {
  id: number,
  name: string;
  audio: string;
}
@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit{
  players: Player[] = [];
  activePlayers: Player[] = [];
  combinedPlayers: Player[] = [];

  constructor(public dialog: MatDialog) {}
  ngOnInit() {
    this.players = JSON.parse(localStorage.getItem('players') || '[]');
    this.activePlayers = JSON.parse(localStorage.getItem('activePlayers') || '[]');
    this.combinedPlayers = [...this.players, ...this.activePlayers];
    console.log(this.players)
    console.log(this.activePlayers)
    console.log(this.combinedPlayers)
  }

  deletePlayer(index: number) {
    // Remove the player from the array based on the index
    this.players.splice(index, 1);

    // Update the players in localStorage
    localStorage.setItem('players', JSON.stringify(this.players));
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPlayerComponent, {
      width: '90%',
      height: '50%',
      disableClose: true
    });

    // Fetch players from local storage when the dialog is closed.
    dialogRef.afterClosed().subscribe(() => {
      this.players = JSON.parse(localStorage.getItem('players') || '[]');
    });
  }

  protected readonly open = open;
}
