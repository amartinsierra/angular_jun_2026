import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarController } from './buscar-controller';

describe('BuscarController', () => {
  let component: BuscarController;
  let fixture: ComponentFixture<BuscarController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarController],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarController);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
