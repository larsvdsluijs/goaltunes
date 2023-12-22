import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayScreenComponent} from "./views/play-screen/play-screen.component";
import {PlayersListComponent} from "./views/players-list/players-list.component";
import {OponentSongsComponent} from "./views/oponent-songs/oponent-songs.component";
import {EditLayoutComponent} from "./views/edit-layout/edit-layout.component";

const routes: Routes = [
  { path: '', component: PlayScreenComponent},
  { path: 'players', component: PlayersListComponent},
  { path: 'oponent', component: OponentSongsComponent},
  { path: 'layout', component: EditLayoutComponent},
  { path: '*', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
