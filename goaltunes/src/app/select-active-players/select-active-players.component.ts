import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from '@angular/material/snack-bar';

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
  needsReload = false;


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
  constructor(
    public dialogRef: MatDialogRef<SelectActivePlayersComponent>,
    private _snackBar: MatSnackBar) {}
  setMaxPlayers(event: any) {
    this.maxPlayerAmount = event.target.value;
    localStorage.setItem('maxPlayers', this.maxPlayerAmount.toString())
  }

  onPlayerSelected() {
    if (this.selectedPlayer) {
      // If not, add to activePlayers and update localStorage
      if (this.activePlayers.length < this.maxPlayerAmount) {
        this.activePlayers.push(this.selectedPlayer);
        try {
          localStorage.setItem('activePlayers', JSON.stringify(this.activePlayers));

          // Remove player from this.players array
          this.players = this.players.filter(player => player.id !== this.selectedPlayer?.id);

          // Save the updated this.players back to localStorage
          localStorage.setItem('players', JSON.stringify(this.players));
          this.needsReload = true;
        } catch (error) {
          if (error instanceof DOMException && error.code === 22) { // 22 is QuotaExceededError
            this.openSnackBar("Opslag limiet bereikt!.", "Begrepen");
          } else {
            console.error('An unexpected error occurred:', error);
          }
        }
      } else {
        this.openSnackBar("Maximale actieve spelers aantal bereikt", "Begrepen");
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
      this.needsReload = true;
    }
  }

  closeDialog() {
    if(this.needsReload)
      window.location.reload();
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }


}
