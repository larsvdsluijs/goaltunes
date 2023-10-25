import {Component, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {AddPlayerComponent} from "../add-player/add-player.component";

interface Player {
  name: string;
  audio: string;
}

@Component({
  selector: 'app-play-screen',
  templateUrl: './play-screen.component.html',
  styleUrls: ['./play-screen.component.scss']
})
export class PlayScreenComponent implements OnInit{
    players: Player[] = [];
    ngOnInit() {
      this.fetchPlayersFromLocalstorage();
    }
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddPlayerComponent, {
      width: '90%',
      height: '50%'
    })
  }
  fetchPlayersFromLocalstorage() {
    // Haal de array van spelers op uit localStorage
    this.players = JSON.parse(localStorage.getItem('players') || '[]');
  }

  convertBase64ToAudioObjectURL(base64Data: string): string {
    const byteCharacters = atob(base64Data);
    const byteNumbers: number[] = [];

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers.push(byteCharacters.charCodeAt(i));
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'audio/mp3' }); // adjust the mime type accordingly
    return URL.createObjectURL(blob);
  }


  playAudio(base64Data: string) {
    const audioSrc = this.convertBase64ToAudioObjectURL(base64Data);
    const audio = new Audio(audioSrc);
    audio.play();
  }



}
