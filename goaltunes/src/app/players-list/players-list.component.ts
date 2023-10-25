import {Component, OnInit} from '@angular/core';

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
  ngOnInit() {
    this.players = JSON.parse(localStorage.getItem('players') || '[]');
  }

  deletePlayer(index: number) {
    // Remove the player from the array based on the index
    this.players.splice(index, 1);

    // Update the players in localStorage
    localStorage.setItem('players', JSON.stringify(this.players));
  }
}
