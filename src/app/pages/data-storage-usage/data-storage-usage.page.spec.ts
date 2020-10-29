import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataStorageUsagePage } from './data-storage-usage.page';

describe('DataStorageUsagePage', () => {
  let component: DataStorageUsagePage;
  let fixture: ComponentFixture<DataStorageUsagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataStorageUsagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataStorageUsagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
