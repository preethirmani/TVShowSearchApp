import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllShowsComponent } from './all-shows/all-shows.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { GaugeModule } from 'angular-gauge';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { EpisodeComponent } from './episode/episode.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    AllShowsComponent,
    SearchComponent,
    SearchDetailsComponent,
    EpisodeComponent

  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    GaugeModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
