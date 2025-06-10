import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionDeComponentes } from './comunicacion-de-componentes';

describe('ComunicacionDeComponentes', () => {
  let component: ComunicacionDeComponentes;
  let fixture: ComponentFixture<ComunicacionDeComponentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicacionDeComponentes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicacionDeComponentes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
