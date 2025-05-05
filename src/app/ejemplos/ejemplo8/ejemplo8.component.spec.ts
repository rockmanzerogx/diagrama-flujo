import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo8Component } from './ejemplo8.component';

describe('Ejemplo8Component', () => {
  let component: Ejemplo8Component;
  let fixture: ComponentFixture<Ejemplo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
