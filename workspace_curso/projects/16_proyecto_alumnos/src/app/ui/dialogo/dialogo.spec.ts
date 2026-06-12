import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogo } from './dialogo';

describe('Dialogo', () => {
  let component: Dialogo;
  let fixture: ComponentFixture<Dialogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dialogo],
    }).compileComponents();

    fixture = TestBed.createComponent(Dialogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
