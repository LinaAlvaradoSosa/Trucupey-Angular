import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiMensajesComponent } from './admi-mensajes.component';

describe('AdmiMensajesComponent', () => {
  let component: AdmiMensajesComponent;
  let fixture: ComponentFixture<AdmiMensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmiMensajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmiMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
