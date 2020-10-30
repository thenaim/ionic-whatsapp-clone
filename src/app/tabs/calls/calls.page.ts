import { Component, OnInit } from '@angular/core';
import { Config } from '@ionic/angular';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {
  isIos = false;

  constructor(
    private config: Config
  ) { }

  segmentChanged(event) {
    console.log(event);
  }

  ngOnInit() {
    this.isIos = this.config.get('mode') === 'ios';
  }

}
