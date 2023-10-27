import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddPlayerComponent} from "../add-player/add-player.component";
import {OponentSongDialogComponent} from "../oponent-song-dialog/oponent-song-dialog.component";

interface Player {
  name: string;
  audio: string;
}
@Component({
  selector: 'app-oponent-songs',
  templateUrl: './oponent-songs.component.html',
  styleUrls: ['./oponent-songs.component.scss']
})
export class OponentSongsComponent implements OnInit{

  songs = [];

  constructor(public dialog: MatDialog) {}
  ngOnInit() {
    this.songs = JSON.parse(localStorage.getItem('oponentSongs') || '[]');
  }

  deleteSong(index: number) {
    // Remove the player from the array based on the index
    this.songs.splice(index, 1);

    // Update the players in localStorage
    localStorage.setItem('oponentSongs', JSON.stringify(this.songs));
  }

  openDialog() {
    const dialogRef = this.dialog.open(OponentSongDialogComponent, {
      width: '90%',
      height: '30%'
    });

    // Fetch players from local storage when the dialog is closed.
    dialogRef.afterClosed().subscribe(() => {
      this.songs = JSON.parse(localStorage.getItem('oponentSongs') || '[]');
    });
  }

  protected readonly open = open;
}
