import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatusPrivacyPage } from './status-privacy.page';

describe('StatusPrivacyPage', () => {
  let component: StatusPrivacyPage;
  let fixture: ComponentFixture<StatusPrivacyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPrivacyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusPrivacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
