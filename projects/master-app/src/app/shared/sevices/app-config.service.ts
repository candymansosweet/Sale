import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConsts } from 'projects/master-app/src/app/shared/constants/appConsts';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config: any = {
    api: {}
  };
  private options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      DataType: 'application/json',
    },
  };

  constructor(
    private http: HttpClient
  ) { }

  load(environment: any) {
    console.log('environment', environment);
    return new Promise((resolve, reject) => {
      this.http
        .get(
          `../../assets/config/${environment.env}.json`,
          this.options
        )
        .subscribe({
          next: (data: any) => {
            this.setConfig(data);
            resolve(true);
          },
          error: (error) => {
            console.log('error', error);
            throw new Error(error.message || 'Server Error');
          },
        });
    });
  }

  private setConfig = (data: any): void => {
    this.config.api.hrm = data.api.hrm;
    this.config.api.media = data.api.meida;
    this.config.title = data.title;
    this.config.favicon = data.favicon;
  };

  getConfig = () => this.config;
}
