import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodEstabDisplayComponent } from './food-estab-display.component';

describe('FoodEstabDisplayComponent', () => {
  let component: FoodEstabDisplayComponent;
  let fixture: ComponentFixture<FoodEstabDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodEstabDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodEstabDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
