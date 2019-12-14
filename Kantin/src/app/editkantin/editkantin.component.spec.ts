import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditkantinComponent } from './editkantin.component';

describe('EditkantinComponent', () => {
  let component: EditkantinComponent;
  let fixture: ComponentFixture<EditkantinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditkantinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditkantinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
