import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatsappWebDesktopPage } from './whatsapp-web-desktop.page';

describe('WhatsappWebDesktopPage', () => {
  let component: WhatsappWebDesktopPage;
  let fixture: ComponentFixture<WhatsappWebDesktopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappWebDesktopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatsappWebDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
