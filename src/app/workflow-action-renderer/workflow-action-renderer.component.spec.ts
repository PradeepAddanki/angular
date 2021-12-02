import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowActionRendererComponent } from './workflow-action-renderer.component';

describe('WorkflowActionRendererComponent', () => {
  let component: WorkflowActionRendererComponent;
  let fixture: ComponentFixture<WorkflowActionRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowActionRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowActionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
