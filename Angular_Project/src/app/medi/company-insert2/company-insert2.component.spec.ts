import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInsertComponent2 } from './company-insert2.component';

describe('CompanyInsertComponent', () => {
  let component: CompanyInsertComponent2;
  let fixture: ComponentFixture<CompanyInsertComponent2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyInsertComponent2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInsertComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
