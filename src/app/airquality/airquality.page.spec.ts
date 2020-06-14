import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AirqualityPage } from './airquality.page';

describe('AirqualityPage', () => {
  let component: AirqualityPage;
  let fixture: ComponentFixture<AirqualityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirqualityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AirqualityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
