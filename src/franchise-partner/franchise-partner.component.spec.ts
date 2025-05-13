import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisePartnerComponent } from './franchise-partner.component';

describe('FranchisePartnerComponent', () => {
  let component: FranchisePartnerComponent;
  let fixture: ComponentFixture<FranchisePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FranchisePartnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FranchisePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
