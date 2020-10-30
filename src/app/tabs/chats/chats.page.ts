import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform/platform.service';
import { FakerService } from '../../services/faker/faker.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  chatsList: any[] = [];

  constructor(
    public platformService: PlatformService,
    private fakerService: FakerService
  ) { }

  dataInit() {
    this.fakerService.getFaker().then((faker) => {
      this.chatsList = Array.apply(null, Array(25)).map(() => {
        const gender = faker.random.arrayElements([1, 0])[0];
        return {
          id: faker.random.uuid(),
          first_name: faker.name.firstName(gender),
          last_name: faker.name.lastName(gender),
          email: faker.internet.email(),
          avatar: faker.internet.avatar(),
          last_message: faker.lorem.sentence()
        };
      });
    });
  }

  ngOnInit() {
    this.dataInit();
  }
}
