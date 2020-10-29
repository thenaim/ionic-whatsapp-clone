import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatNewPage } from './chat-new.page';

describe('ChatNewPage', () => {
  let component: ChatNewPage;
  let fixture: ComponentFixture<ChatNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
