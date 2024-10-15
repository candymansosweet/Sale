import { Component } from '@angular/core';
import { AppConfigService } from './shared/sevices/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'master-app';
}
