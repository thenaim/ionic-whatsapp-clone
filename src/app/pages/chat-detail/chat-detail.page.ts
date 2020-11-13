import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonItemSliding } from '@ionic/angular';
import { BehaviorSubject, SubscriptionLike } from 'rxjs';
import { debounceTime, map, skipWhile, takeUntil, takeWhile, tap } from 'rxjs/operators';

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

  isPageScrolling = false;
  isAllowScrollEvents = false;
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

  dataInit() {
    return new Promise((resolve) => {
      this.faker.generateUser(this.userId).then((user) => this.user = user);
      this.faker.generateChat(4, 8).then((chats) => {
        chats.forEach((element) => {
          this.chats.push(element);
          this.content.scrollToBottom(0);
        });
        this.content.scrollToBottom(0);
      });

      setTimeout(() => {
        resolve();
      });
    });
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.scrolling.pipe(
        tap(scroll => {
          if (scroll) {
            this.isPageScrolling = scroll;
          }
        }),
        debounceTime(1000),
      ).subscribe(res => this.isPageScrolling = res)
    );

    this.dataInit()
      .then(() => this.content.scrollToBottom(0))
      .then(() => setTimeout(() => this.isAllowScrollEvents = true));
  }

  ionViewDidEnter() { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
