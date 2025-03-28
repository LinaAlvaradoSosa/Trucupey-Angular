import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiComponent } from './admi.component';

describe('AdmiComponent', () => {
  let component: AdmiComponent;
  let fixture: ComponentFixture<AdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
