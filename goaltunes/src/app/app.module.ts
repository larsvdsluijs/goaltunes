import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayScreenComponent } from './views/play-screen/play-screen.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { AddPlayerComponent } from './views/add-player/add-player.component';
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { PlayersListComponent } from './views/players-list/players-list.component';
import {MatCardModule} from "@angular/material/card";
import { OponentSongsComponent } from './views/oponent-songs/oponent-songs.component';
import { OponentSongDialogComponent } from './views/oponent-song-dialog/oponent-song-dialog.component';
import { SelectActivePlayersComponent } from './views/select-active-players/select-active-players.component';
import {MatSelectModule} from "@angular/material/select";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NgOptimizedImage} from "@angular/common";
import { EditLayoutComponent } from './views/edit-layout/edit-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayScreenComponent,
    NavbarComponent,
    AddPlayerComponent,
    PlayersListComponent,
    OponentSongsComponent,
    OponentSongDialogComponent,
    SelectActivePlayersComponent,
    EditLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    NgOptimizedImage
  ],
  providers: [
    MatSnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
