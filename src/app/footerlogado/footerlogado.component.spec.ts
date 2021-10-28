import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterlogadoComponent } from './footerlogado.component';

describe('FooterlogadoComponent', () => {
  let component: FooterlogadoComponent;
  let fixture: ComponentFixture<FooterlogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterlogadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterlogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
