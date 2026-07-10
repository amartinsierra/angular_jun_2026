import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCompartido } from './ui-compartido';

describe('UiCompartido', () => {
  let component: UiCompartido;
  let fixture: ComponentFixture<UiCompartido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCompartido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCompartido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
