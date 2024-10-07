import { Component } from '@angular/core';
import { AppConfigService } from './shared/sevices/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'master-app';
  constructor(
    private appConfigService: AppConfigService,
  ) {
    this.setFavicon(this.appConfigService.getConfig().favicon);
    this.setTitle(this.appConfigService.getConfig().title);
  }
  setFavicon(pathOfIcon: string) {
    let favicon = document.querySelector("link[rel='icon']");
    favicon?.setAttribute("href", pathOfIcon);
  }
  setTitle(title: string) {
    document.title = title;
  }
}
