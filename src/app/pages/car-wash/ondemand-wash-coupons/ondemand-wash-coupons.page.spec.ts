import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OndemandWashCouponsPage } from './ondemand-wash-coupons.page';

describe('OndemandWashCouponsPage', () => {
  let component: OndemandWashCouponsPage;
  let fixture: ComponentFixture<OndemandWashCouponsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OndemandWashCouponsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OndemandWashCouponsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
