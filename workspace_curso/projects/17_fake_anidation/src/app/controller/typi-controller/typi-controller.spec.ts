import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypiController } from './typi-controller';

describe('TypiController', () => {
  let component: TypiController;
  let fixture: ComponentFixture<TypiController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypiController],
    }).compileComponents();

    fixture = TestBed.createComponent(TypiController);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
