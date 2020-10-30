import { Component, OnInit } from '@angular/core';
import { Config } from '@ionic/angular';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  isIos = false;

  constructor(
    private config: Config
  ) { }

  ngOnInit() {
    this.isIos = this.config.get('mode') === 'ios';
  }
}
