import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCompraComponent } from './info-compra.component';

describe('InfoCompraComponent', () => {
  let component: InfoCompraComponent;
  let fixture: ComponentFixture<InfoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
