import {Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Player} from "../../models/player";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent {

  playerName: string = '';
  players = [];
  selectedFile: File | null = null;

  constructor(
    public dialogRef: MatDialogRef<AddPlayerComponent>,
    public snackbar: MatSnackBar) {}

  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }

  addPlayerToLocalstorage() {
    if(this.playerName === '' || this.playerName === undefined) {
      this.snackbar.open("Naam mag niet leeg zijn!", "begrepen")
      return;
    }
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        const base64String = event.target.result.split(',')[1];

        // Retrieve current players from localStorage
        const currentPlayers: Player[] = JSON.parse(localStorage.getItem('players') || '[]');

        const newPlayer: Player = {
          id: Date.now() + Math.floor(Math.random() * 1000),
          name: this.playerName,
          audio: base64String
        };

        currentPlayers.push(newPlayer);

        try {
          localStorage.setItem('players', JSON.stringify(currentPlayers));
          this.closeDialog();
        } catch (error) {
          if (error instanceof DOMException && error.code === 22) { // 22 is QuotaExceededError
            // Handle the error
            this.snackbar.open("Opslag limiet bereikt!", "Begrepen",{
              duration: 5000
            });
          } else {
            console.error('An unexpected error occurred:', error);
          }
        }
      };

      reader.readAsDataURL(this.selectedFile);
    } else {
      this.snackbar.open("Je moet een file toevoegen!", "Begrepen", {
        duration: 5000
      })
    }
  }


  closeDialog() {
    this.dialogRef.close();
  }

}
