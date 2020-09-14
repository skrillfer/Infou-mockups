import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewEstablishmentComponent } from './create-new-establishment.component';

describe('CreateNewEstablishmentComponent', () => {
  let component: CreateNewEstablishmentComponent;
  let fixture: ComponentFixture<CreateNewEstablishmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewEstablishmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewEstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
