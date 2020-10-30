import { Injectable } from '@angular/core';
import * as faker from 'faker';

export type AppLanguage = 'en' | 'ru';

@Injectable({
  providedIn: 'root'
})
export class FakerService {
  lang: AppLanguage;

  constructor() { }

  setLang(lang: AppLanguage) {
    this.lang = lang;
    faker.setLocale(lang);
  }

  getFaker(): Promise<Faker.FakerStatic> {
    return new Promise((resolve) => {
      resolve(faker);
    });
  }
}
