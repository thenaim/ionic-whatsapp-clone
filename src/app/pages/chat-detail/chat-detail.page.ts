import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonItemSliding } from '@ionic/angular';
import { BehaviorSubject, SubscriptionLike } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

import { FakerService } from '../../services/faker/faker.service';

export interface CurrentUserInterface {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  last_message: string;
}

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit, OnDestroy {
  userId = null;
  user: CurrentUserInterface;
  chats: any[] = [];
  imageBg = 'chat-bg';

  messageControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  pageScrolling = false;
  isAllowScroll = true;
  scrolling: BehaviorSubject<boolean> = new BehaviorSubject(false);

  subscriptions: SubscriptionLike[] = [];
  @ViewChild(IonContent) private content: IonContent;
  constructor(
    private faker: FakerService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.userId = params.id;
    });
  }

  /**
   * Content scroll start
   */
  logScrollStart() {
    this.scrolling.next(true);
  }

  /**
   * Content scrolling
   */
  logScrolling(event) {
    // console.log('Scrolling');
  }

  /**
   * Content scroll end
   */
  logScrollEnd() {
    this.scrolling.next(false);
  }

  /**
   * Reply message (drag)
   * @param {Event} event - drag event
   * @param {IonItemSliding} slidingItem - item sliding directive
   */
  messageDraged(event, slidingItem: IonItemSliding) {
    if (event.detail.ratio === 1) {
      slidingItem.closeOpened();
    }
  }

  /**
   * Send message
   */
  sendMessage(event) {
    event.preventDefault();

    // add message
    this.chats[this.chats.length - 1].chats.push({
      message: this.messageControl.value,
      date: new Date(),
      type: 'me'
    });

    // clear input
    this.messageControl.setValue('');

    this.faker.getFaker().then(faker => {
      // generate answer
      for (let i = 0; i < faker.random.arrayElement([1, 2, 3]); i++) {
        this.chats[this.chats.length - 1].chats.push({
          message: faker.lorem.sentences(faker.random.arrayElement([1, 2, 3])),
          date: faker.date.recent(),
          first_name: faker.name.findName().split(' ')[0],
          last_name: faker.name.lastName(),
          avatar: faker.image.avatar(),
          type: 'user'
        });
      }

      // scroll to bottom
      setTimeout(() => {
        this.content.scrollToBottom(0);
      });
    });
  }

  async dataInit() {
    return this.faker.getFaker().then(faker => {
      // generate fake message data
      for (let chatIndex = 0; chatIndex < 4; chatIndex++) {
        const chat = {
          date: faker.date.weekday(),
          chats: []
        };

        for (let chatsIndex = 0; chatsIndex < 5; chatsIndex++) {
          const gender = faker.random.arrayElements([1, 0])[0];
          chat.chats.push({
            message: faker.lorem.sentences(faker.random.arrayElement([1, 2, 3])),
            date: faker.date.recent(),
            first_name: faker.name.firstName(gender),
            last_name: faker.name.lastName(gender),
            avatar: faker.internet.avatar(),
            type: faker.random.arrayElement(['user', 'me'])
          });
        }

        this.chats.push(chat);
        setTimeout(() => {
          this.content.scrollToBottom(0);
        });
      }

      // generate current user, but set id from url param
      this.user = {
        id: this.userId,
        first_name: faker.name.firstName(1),
        last_name: faker.name.lastName(1),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
        last_message: faker.lorem.sentence()
      };
    });
  }

  ngOnInit(): void {
    this.dataInit();

    // subscribe to scrolling event
    this.subscriptions.push(
      this.scrolling.pipe(
        tap((scrol => {
          if (scrol) {
            this.pageScrolling = scrol;
          }
        })),
        debounceTime(400)).subscribe(res => {
          this.pageScrolling = res;
        })
    );
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.content.scrollToBottom(0);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
