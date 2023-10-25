import {Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

interface Player {
  name: string;
  audio: string;
}
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit{

  playerName: string = '';
  playerAudio = null;
  players = [];
  selectedFile: File | null = null;
  ngOnInit() {}
  constructor(public dialogRef: MatDialogRef<AddPlayerComponent>) {}

  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }

  addPlayerToLocalstorage() {
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        const base64String = event.target.result.split(',')[1];
        // Create a new player object
        const newPlayer: Player = {
          name: this.playerName,
          audio: base64String
        };
        // Retrieve current players from localStorage, add the new player, and then store it again
        const currentPlayers: Player[] = JSON.parse(localStorage.getItem('players') || '[]');
        currentPlayers.push(newPlayer);
        localStorage.setItem('players', JSON.stringify(currentPlayers));
      };

      reader.readAsDataURL(this.selectedFile);
    }
  }

}
