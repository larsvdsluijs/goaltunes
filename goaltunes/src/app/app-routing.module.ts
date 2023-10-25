import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayScreenComponent} from "./play-screen/play-screen.component";
import {PlayersListComponent} from "./players-list/players-list.component";

const routes: Routes = [
  { path: '', component: PlayScreenComponent},
  {path: 'players', component: PlayersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
