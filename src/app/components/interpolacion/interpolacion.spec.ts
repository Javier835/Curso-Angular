import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interpolacion } from './interpolacion';

describe('Interpolacion', () => {
  let component: Interpolacion;
  let fixture: ComponentFixture<Interpolacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interpolacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interpolacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
