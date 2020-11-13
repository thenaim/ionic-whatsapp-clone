import { Injectable } from '@angular/core';
import * as faker from 'faker';

export type AppLanguage = 'en' | 'ru';

@Injectable({
  providedIn: 'root',
})
export class FakerService {
  lang: AppLanguage;

  constructor() {}

  /**
   * Set lang
   * @param {AppLanguage} lang - The title of the book.
   */
  setLang(lang: AppLanguage) {
    this.lang = lang;
    faker.setLocale(lang);
  }

  /**
   * Get Faker
   * @return {Promise<Faker.FakerStatic>}
   */
  getFaker(): Promise<Faker.FakerStatic> {
    return new Promise((resolve) => {
      resolve(faker);
    });
  }

  generateUser(userId: string): Promise<any> {
    return new Promise((resolve) => {
      const user = {
        id: userId,
        first_name: faker.name.firstName(1),
        last_name: faker.name.lastName(1),
        avatar: faker.internet.avatar(),
      };
      resolve(user);
    });
  }

  generateChat(chatGroupLength: number, chatLength: number): Promise<any> {
    return new Promise((resolve) => {
      const chats = Array.apply(null, Array(chatGroupLength)).map(() => {
        const chat = {
          date: faker.date.weekday(),
          chats: [],
        };

        chat.chats = Array.apply(null, Array(chatLength)).map(() => {
          return {
            message: faker.lorem.sentences(
              faker.random.arrayElement([1, 2, 3])
            ),
            date: faker.date.recent(),
            avatar: faker.image.avatar(),
            type: faker.random.arrayElement(['user', 'me']),
          };
        });

        return chat;
      });

      resolve(chats);
    });
  }
}
