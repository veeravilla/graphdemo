import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphInstancesStateComponent } from './graph-instances-state.component';

describe('GraphInstancesStateComponent', () => {
  let component: GraphInstancesStateComponent;
  let fixture: ComponentFixture<GraphInstancesStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphInstancesStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphInstancesStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
