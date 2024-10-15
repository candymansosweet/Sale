import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopLibComponent } from './nop-lib.component';

describe('NopLibComponent', () => {
  let component: NopLibComponent;
  let fixture: ComponentFixture<NopLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NopLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NopLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
