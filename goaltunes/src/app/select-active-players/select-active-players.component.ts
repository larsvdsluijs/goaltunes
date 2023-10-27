import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

interface Player {
  id: number,
  name: string;
  audio: string;
}
@Component({
  selector: 'app-select-active-players',
  templateUrl: './select-active-players.component.html',
  styleUrls: ['./select-active-players.component.scss']
})
export class SelectActivePlayersComponent implements OnInit{
  players: Player[] = [];
  activePlayers: Player[] = [];
  selectedPlayer: Player | null = null;
  maxPlayerAmount: number = 0;


  ngOnInit() {
    this.players = JSON.parse(localStorage.getItem('players') || '[]');
    this.activePlayers = JSON.parse(localStorage.getItem('activePlayers') || '[]');

    const storedValue = localStorage.getItem('maxPlayers');
    if (storedValue) {
      this.maxPlayerAmount = parseInt(storedValue);
    } else {
      this.maxPlayerAmount = 0;
    }
  }
  constructor(public dialogRef: MatDialogRef<SelectActivePlayersComponent>) {}
  setMaxPlayers(event: any) {
    this.maxPlayerAmount = event.target.value;
    localStorage.setItem('maxPlayers', this.maxPlayerAmount.toString())
  }

  onPlayerSelected() {
    if (this.selectedPlayer) {
      // Check if the player is already in the activePlayers list
      const isPlayerActive = this.activePlayers.some(player => player.id === this.selectedPlayer?.id);

      // If not, add to activePlayers and update localStorage
      if (!isPlayerActive && this.activePlayers.length < this.maxPlayerAmount) {
        this.activePlayers.push(this.selectedPlayer);
        localStorage.setItem('activePlayers', JSON.stringify(this.activePlayers));

        // Remove player from this.players array
        this.players = this.players.filter(player => player.id !== this.selectedPlayer?.id);
        // Save the updated this.players back to localStorage
        localStorage.setItem('players', JSON.stringify(this.players));
      }
    }
  }

  removeActivePlayer(playerToRemove: Player) {
    // Find the index of the player in the activePlayers array
    const playerIndex = this.activePlayers.findIndex(player => player.id === playerToRemove.id);

    // If the player is found in the activePlayers array
    if (playerIndex !== -1) {
      // Remove the player from the activePlayers array
      this.activePlayers.splice(playerIndex, 1);
      // Update the activePlayers in localStorage
      localStorage.setItem('activePlayers', JSON.stringify(this.activePlayers));

      // Push the player back to the players array
      this.players.push(playerToRemove);
      // Save the updated players array back to localStorage
      localStorage.setItem('players', JSON.stringify(this.players));
    }
  }



  closeDialog() {
    this.dialogRef.close();
  }

}
