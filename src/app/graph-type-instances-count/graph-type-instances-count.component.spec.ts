import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTypeInstancesCountComponent } from './graph-type-instances-count.component';

describe('GraphTypeInstancesCountComponent', () => {
  let component: GraphTypeInstancesCountComponent;
  let fixture: ComponentFixture<GraphTypeInstancesCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphTypeInstancesCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTypeInstancesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
