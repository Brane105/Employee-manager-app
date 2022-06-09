import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetempComponent } from './getemp.component';

describe('GetempComponent', () => {
  let component: GetempComponent;
  let fixture: ComponentFixture<GetempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
