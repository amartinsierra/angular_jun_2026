import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboChild } from './combo-child';

describe('ComboChild', () => {
  let component: ComboChild;
  let fixture: ComponentFixture<ComboChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboChild],
    }).compileComponents();

    fixture = TestBed.createComponent(ComboChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
