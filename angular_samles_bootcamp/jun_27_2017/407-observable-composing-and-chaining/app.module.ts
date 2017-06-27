import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AbcPageComponent } from './abc-page.component';
import { RedditSearchComponent } from './reddit-search/reddit-search';
import { RedditImageSearch } from './reddit-search/redditImageSearch';

@NgModule({
  declarations: [
    AbcPageComponent,
    RedditSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [RedditImageSearch],
  bootstrap: [AbcPageComponent]
})
export class AppModule { }
