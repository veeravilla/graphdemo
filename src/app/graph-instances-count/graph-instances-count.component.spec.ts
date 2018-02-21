import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphInstancesCountComponent } from './graph-instances-count.component';

describe('GraphInstancesCountComponent', () => {
  let component: GraphInstancesCountComponent;
  let fixture: ComponentFixture<GraphInstancesCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphInstancesCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphInstancesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
