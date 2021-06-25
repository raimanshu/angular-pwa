import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweIndexComponent } from './swe-index.component';

describe('SweIndexComponent', () => {
  let component: SweIndexComponent;
  let fixture: ComponentFixture<SweIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
