import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tabs: any[] = [
    { id: 'status', badge: 0, icon: 'disc-outline' },
    { id: 'calls', badge: 0, icon: 'call-outline' },
    { id: 'camera', badge: 0, icon: 'camera-outline', button: true },
    { id: 'chats', badge: 0, icon: 'chatbubbles-outline' },
    { id: 'settings', badge: 0, icon: 'cog-outline' },
  ];

  constructor() {}

}
