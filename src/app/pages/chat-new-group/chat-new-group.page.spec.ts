import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatNewGroupPage } from './chat-new-group.page';

describe('ChatNewGroupPage', () => {
  let component: ChatNewGroupPage;
  let fixture: ComponentFixture<ChatNewGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatNewGroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatNewGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
