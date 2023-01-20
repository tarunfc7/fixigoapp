import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OndemandOrderTrackingPage } from './ondemand-order-tracking.page';

describe('OndemandOrderTrackingPage', () => {
  let component: OndemandOrderTrackingPage;
  let fixture: ComponentFixture<OndemandOrderTrackingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OndemandOrderTrackingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OndemandOrderTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
