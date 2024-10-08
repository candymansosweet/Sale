import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RemoteEntryModule } from './remote-entry/remote-entry.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    RemoteEntryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
