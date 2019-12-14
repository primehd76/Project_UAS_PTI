import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkantinComponent } from './addkantin.component';

describe('AddkantinComponent', () => {
  let component: AddkantinComponent;
  let fixture: ComponentFixture<AddkantinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddkantinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddkantinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
