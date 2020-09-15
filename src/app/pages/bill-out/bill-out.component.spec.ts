import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillOutComponent } from './bill-out.component';

describe('BillOutComponent', () => {
  let component: BillOutComponent;
  let fixture: ComponentFixture<BillOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
