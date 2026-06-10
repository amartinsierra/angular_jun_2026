import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuController } from './menu-controller';

describe('MenuController', () => {
  let component: MenuController;
  let fixture: ComponentFixture<MenuController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuController],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuController);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
