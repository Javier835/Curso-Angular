import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasEstructurales } from './directivas-estructurales';

describe('DirectivasEstructurales', () => {
  let component: DirectivasEstructurales;
  let fixture: ComponentFixture<DirectivasEstructurales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivasEstructurales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasEstructurales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
