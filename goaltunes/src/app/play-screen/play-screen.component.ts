import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {MatSnackBar} from "@angular/material/snack-bar";

interface Player {
  id: number,
  name: string;
  audio: string;
}

@Component({
  selector: 'app-play-screen',
  templateUrl: './play-screen.component.html',
  styleUrls: ['./play-screen.component.scss']
})
export class PlayScreenComponent implements OnInit {
  players: Player[] = [];
  activePlayers: Player[] = [];
  oponentSongs = [];
  shuffledSongs = [];
  oponentSongPlaying = false;
  audio: HTMLAudioElement | null = null;
  currentAudioIndex: number | null = null; // Added this property to track the index of the currently playing audio

  constructor(public dialog: MatDialog,
              public snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.players = JSON.parse(localStorage.getItem('players') || '[]');
    this.activePlayers = JSON.parse(localStorage.getItem('activePlayers') || '[]');
    this.oponentSongs = JSON.parse(localStorage.getItem('oponentSongs') || '[]');
  }
  convertBase64ToAudioObjectURL(base64Data: string): string {
    const byteCharacters = atob(base64Data);
    const byteNumbers: number[] = [];

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers.push(byteCharacters.charCodeAt(i));
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], {type: 'audio/mp3'});
    return URL.createObjectURL(blob);
  }

  playAudio(base64Data: string, index: number): void {
    this.stopAudio();

    this.oponentSongPlaying = false;

    const audioSrc = this.convertBase64ToAudioObjectURL(base64Data);
    this.audio = new Audio(audioSrc);
    this.audio.play();
    this.currentAudioIndex = index; // Store the index of the currently playing audio

    // Listen for when the audio ends
    this.audio.addEventListener('ended', () => {
      this.currentAudioIndex = null; // Reset the index
      this.oponentSongPlaying = false;
    });
  }
  stopAudio(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
      this.currentAudioIndex = null; // Reset the index when the audio is stopped
      this.oponentSongPlaying = false;
    }
  }

  playOponentSong() {
    // Check if there are any songs to play
    if (this.oponentSongs.length === 0) {
      this.snackbar.open("Geen nummers toegevoegd!", "Begrepen", {
        duration: 5000
      });
      return;
    }

    // Check if shuffledSongs is undefined or empty, then refill and shuffle it
    if (!this.shuffledSongs || this.shuffledSongs.length === 0) {
      this.shuffledSongs = [...this.oponentSongs]; // Copy the array
      this.shuffleArray(this.shuffledSongs); // Shuffle the copy
    }

    this.stopAudio();

    // Get the last song from the shuffled array
    const song = this.shuffledSongs.pop();

    if (song === undefined) {
      // Handle the case when shuffledSongs is empty
      // Possibly refill the list or show an error message
      return;
    }

    const audioSrc = this.convertBase64ToAudioObjectURL(song);
    this.audio = new Audio(audioSrc);
    this.audio.play();
    this.oponentSongPlaying = true;

    // Listen for when the audio ends
    this.audio.addEventListener('ended', () => {
      this.currentAudioIndex = null; // Reset the index
      this.oponentSongPlaying = false;
    });
  }

// Function to shuffle an array
  shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


}
