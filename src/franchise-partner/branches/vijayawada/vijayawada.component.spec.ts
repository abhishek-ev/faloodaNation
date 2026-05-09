import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VijayawadaComponent } from './vijayawada.component';

describe('VijayawadaComponent', () => {
  let component: VijayawadaComponent;
  let fixture: ComponentFixture<VijayawadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VijayawadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VijayawadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
