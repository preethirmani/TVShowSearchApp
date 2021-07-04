import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllShowsComponent } from './all-shows/all-shows.component';
import { EpisodeComponent } from './episode/episode.component';
import { SearchDetailsComponent } from './search-details/search-details.component';

const routes: Routes = [
  {path: "", component: AllShowsComponent},
  {path: "search/:id", component: SearchDetailsComponent},
  {path: "episode/:id" , component: EpisodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
