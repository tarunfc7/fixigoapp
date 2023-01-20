import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MechanicalOrderSummaryPage } from './mechanical-order-summary.page';

describe('MechanicalOrderSummaryPage', () => {
  let component: MechanicalOrderSummaryPage;
  let fixture: ComponentFixture<MechanicalOrderSummaryPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicalOrderSummaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MechanicalOrderSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
