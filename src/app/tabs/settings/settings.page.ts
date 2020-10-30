import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform/platform.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    public platformService: PlatformService
  ) { }

  ngOnInit() {
  }

}
