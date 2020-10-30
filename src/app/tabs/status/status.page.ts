import { Component, OnInit } from '@angular/core';
import { Config } from '@ionic/angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  isIos = false;

  constructor(
    private config: Config
  ) { }

  ngOnInit() {
    this.isIos = this.config.get('mode') === 'ios';
  }

}
