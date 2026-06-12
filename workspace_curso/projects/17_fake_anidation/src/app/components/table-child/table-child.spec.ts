import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChild } from './table-child';

describe('TableChild', () => {
  let component: TableChild;
  let fixture: ComponentFixture<TableChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableChild],
    }).compileComponents();

    fixture = TestBed.createComponent(TableChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
