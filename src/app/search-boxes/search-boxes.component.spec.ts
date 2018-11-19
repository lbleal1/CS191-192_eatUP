import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxesComponent } from './search-boxes.component';

describe('SearchBoxesComponent', () => {
  let component: SearchBoxesComponent;
  let fixture: ComponentFixture<SearchBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
