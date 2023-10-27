import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayScreenComponent } from './play-screen/play-screen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { PlayersListComponent } from './players-list/players-list.component';
import {MatCardModule} from "@angular/material/card";
import { OponentSongsComponent } from './oponent-songs/oponent-songs.component';
import { OponentSongDialogComponent } from './oponent-song-dialog/oponent-song-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayScreenComponent,
    NavbarComponent,
    AddPlayerComponent,
    PlayersListComponent,
    OponentSongsComponent,
    OponentSongDialogComponent
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
