import {Component, OnInit} from '@angular/core';
import {AddPlayerComponent} from "../add-player/add-player.component";
import { MatDialog } from '@angular/material/dialog';

interface Player {
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

  constructor(public dialog: MatDialog) {}
  ngOnInit() {
    this.players = JSON.parse(localStorage.getItem('players') || '[]');
  }

  deletePlayer(index: number) {
    // Remove the player from the array based on the index
    this.players.splice(index, 1);

    // Update the players in localStorage
    localStorage.setItem('players', JSON.stringify(this.players));
  }

  openDialog() {
    this.dialog.open(AddPlayerComponent, {
      width: '90%',
      height: '50%'
    })
  }

  protected readonly open = open;
}
