import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfavoriteComponent } from './showfavorite.component';

describe('ShowfavoriteComponent', () => {
  let component: ShowfavoriteComponent;
  let fixture: ComponentFixture<ShowfavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
