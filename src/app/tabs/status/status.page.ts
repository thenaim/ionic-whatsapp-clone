import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform/platform.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  constructor(
    public platformService: PlatformService
  ) { }

  ngOnInit() { }
}
