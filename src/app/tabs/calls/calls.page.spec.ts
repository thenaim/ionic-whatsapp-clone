import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallsPage } from './calls.page';

describe('CallsPage', () => {
  let component: CallsPage;
  let fixture: ComponentFixture<CallsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
