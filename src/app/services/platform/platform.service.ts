import { Injectable } from '@angular/core';
import { Config } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(
    private config: Config
  ) { }

  get isIOS(): boolean {
    return this.config.get('mode') === 'ios';
  }

  get isAndroid(): boolean {
    return this.config.get('mode') === 'android';
  }
}
