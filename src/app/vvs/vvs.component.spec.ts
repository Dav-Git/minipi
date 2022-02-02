import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvsComponent } from './vvs.component';

describe('VvsComponent', () => {
  let component: VvsComponent;
  let fixture: ComponentFixture<VvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
