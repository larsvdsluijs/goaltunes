import {Component, OnInit} from '@angular/core';
import {AddPlayerComponent} from "../add-player/add-player.component";
import {MatDialog} from '@angular/material/dialog';
import {Player} from "../../models/player";

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
    this.setCombinedPlayers();
  }

  setCombinedPlayers() {
    this.players = JSON.parse(localStorage.getItem('players') || '[]');
    this.activePlayers = JSON.parse(localStorage.getItem('activePlayers') || '[]');
    this.combinedPlayers = [...this.players, ...this.activePlayers];
  }

  deletePlayer(index: number) {
    const playerToDelete = this.combinedPlayers[index];

    // Check if the player is in the players array or activePlayers array
    const playerIndexInPlayers = this.players.findIndex(player => player.name === playerToDelete.name && player.audio === playerToDelete.audio);
    const playerIndexInActivePlayers = this.activePlayers.findIndex(player => player.name === playerToDelete.name && player.audio === playerToDelete.audio);

    // Remove the player based on where it is found
    if (playerIndexInPlayers !== -1) {
      this.players.splice(playerIndexInPlayers, 1);
      localStorage.setItem('players', JSON.stringify(this.players));
    } else if (playerIndexInActivePlayers !== -1) {
      this.activePlayers.splice(playerIndexInActivePlayers, 1);
      localStorage.setItem('activePlayers', JSON.stringify(this.activePlayers));
    }

    // Update the combinedPlayers array
    this.combinedPlayers = [...this.players, ...this.activePlayers];
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPlayerComponent, {
      width: '90%',
      height: '50%',
      disableClose: true
    });

    // Fetch players from local storage when the dialog is closed.
    dialogRef.afterClosed().subscribe(() => {
      this.setCombinedPlayers();
    });
  }

  protected readonly open = open;
}
