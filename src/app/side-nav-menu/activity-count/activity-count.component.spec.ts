import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCountComponent } from './activity-count.component';

describe('ActivityCountComponent', () => {
  let component: ActivityCountComponent;
  let fixture: ComponentFixture<ActivityCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
