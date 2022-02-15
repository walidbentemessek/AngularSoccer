import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchWinLossComponent } from './match-win-loss.component';

describe('MatchWinLossComponent', () => {
  let component: MatchWinLossComponent;
  let fixture: ComponentFixture<MatchWinLossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchWinLossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchWinLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
