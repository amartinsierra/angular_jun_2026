import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDialogo } from './cuadro-dialogo';

describe('CuadroDialogo', () => {
  let component: CuadroDialogo;
  let fixture: ComponentFixture<CuadroDialogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadroDialogo],
    }).compileComponents();

    fixture = TestBed.createComponent(CuadroDialogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
