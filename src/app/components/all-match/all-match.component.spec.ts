import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMatchComponent } from './all-match.component';

describe('AllMatchComponent', () => {
  let component: AllMatchComponent;
  let fixture: ComponentFixture<AllMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
