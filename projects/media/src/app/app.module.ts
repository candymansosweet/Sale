import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RemoteEntryModule } from '../remote-entry/remote-entry.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    RemoteEntryModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('../remote-entry/remote-entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
