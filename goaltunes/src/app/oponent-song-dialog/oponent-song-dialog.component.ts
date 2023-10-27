import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

interface Player {
  name: string;
  audio: string;
}
@Component({
  selector: 'app-oponent-song-dialog',
  templateUrl: './oponent-song-dialog.component.html',
  styleUrls: ['./oponent-song-dialog.component.scss']
})
export class OponentSongDialogComponent implements OnInit {

  playerName: string = '';
  playerAudio = null;
  oponentSongs = [];
  selectedFile: File | null = null;
  ngOnInit() {
  }
  constructor(public dialogRef: MatDialogRef<OponentSongDialogComponent>) {}

  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }

  addSongToLocalStorage() {
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        // Create a new player object
        const newSong = event.target.result.split(',')[1];

        // Retrieve current players from localStorage, add the new player, and then store it again
        const currentSongs = JSON.parse(localStorage.getItem('oponentSongs') || '[]');
        currentSongs.push(newSong);
        localStorage.setItem('oponentSongs', JSON.stringify(currentSongs));
      };

      reader.readAsDataURL(this.selectedFile);
      this.closeDialog();
    } else {

    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
