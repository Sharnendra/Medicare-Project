import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockShowComponent } from './stock-show.component';

describe('StockShowComponent', () => {
  let component: StockShowComponent;
  let fixture: ComponentFixture<StockShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
