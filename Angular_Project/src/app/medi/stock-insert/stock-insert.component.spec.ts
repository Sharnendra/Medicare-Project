import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInsertComponent } from './stock-insert.component';

describe('StockInsertComponent', () => {
  let component: StockInsertComponent;
  let fixture: ComponentFixture<StockInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
