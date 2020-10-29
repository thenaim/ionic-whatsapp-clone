import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarredMessagesPage } from './starred-messages.page';

describe('StarredMessagesPage', () => {
  let component: StarredMessagesPage;
  let fixture: ComponentFixture<StarredMessagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredMessagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarredMessagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
