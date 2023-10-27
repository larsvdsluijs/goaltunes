import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
@Component({
  selector: 'app-oponent-song-dialog',
  templateUrl: './oponent-song-dialog.component.html',
  styleUrls: ['./oponent-song-dialog.component.scss']
})
export class OponentSongDialogComponent implements OnInit {

  oponentSongs = [];
  selectedFile: File | null = null;
  ngOnInit() {
  }
  constructor(public dialogRef: MatDialogRef<OponentSongDialogComponent>,
              public snackbar: MatSnackBar) {}

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

        try {
          localStorage.setItem('oponentSongs', JSON.stringify(currentSongs));
          this.closeDialog();
        } catch (error) {
          if (error instanceof DOMException && error.code === 22) { // 22 is QuotaExceededError
            // Handle the error, for example show a message to the user or notify them in some way
            this.snackbar.open("Opslag limiet bereikt!", "Begrepen",{
              duration: 5000
            });
          } else {
            console.error('An unexpected error occurred:', error);
          }
        }

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
