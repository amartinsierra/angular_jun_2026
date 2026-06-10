import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaController } from './alta-controller';

describe('AltaController', () => {
  let component: AltaController;
  let fixture: ComponentFixture<AltaController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaController],
    }).compileComponents();

    fixture = TestBed.createComponent(AltaController);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
