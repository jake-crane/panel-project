import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorizontalPaneSplitterComponent } from './horizontal-pane-splitter/horizontal-pane-splitter.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalPaneSplitterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
