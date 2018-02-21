import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceDetailsGridComponent } from './instance-details-grid.component';

describe('InstanceDetailsGridComponent', () => {
  let component: InstanceDetailsGridComponent;
  let fixture: ComponentFixture<InstanceDetailsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceDetailsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceDetailsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
