import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayScreenComponent} from "./play-screen/play-screen.component";
import {AddPlayerComponent} from "./add-player/add-player.component";

const routes: Routes = [
  { path: '', component: PlayScreenComponent},
  {path: 'add', component: AddPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
