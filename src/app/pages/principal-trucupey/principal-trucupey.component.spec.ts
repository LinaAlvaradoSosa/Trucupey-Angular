import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalTrucupeyComponent } from './principal-trucupey.component';

describe('PrincipalTrucupeyComponent', () => {
  let component: PrincipalTrucupeyComponent;
  let fixture: ComponentFixture<PrincipalTrucupeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalTrucupeyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalTrucupeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
