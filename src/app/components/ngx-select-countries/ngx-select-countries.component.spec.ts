import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSelectCountriesComponent } from './ngx-select-countries.component';

describe('NgxSelectCountriesComponent', () => {
  let component: NgxSelectCountriesComponent;
  let fixture: ComponentFixture<NgxSelectCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSelectCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSelectCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
