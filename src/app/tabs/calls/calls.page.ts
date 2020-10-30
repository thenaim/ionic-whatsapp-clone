import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform/platform.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {

  constructor(
    public platformService: PlatformService
  ) { }

  segmentChanged(event) {
    console.log(event);
  }

  ngOnInit() { }
}
