import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { TestModule } from 'projects/nop-lib/src/lib/components/test/test.module';
import { AppConfigService } from './shared/sevices/app-config.service';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
export function configServiceFactory(config: AppConfigService) {
  return () => config.load(environment);
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [AppConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
