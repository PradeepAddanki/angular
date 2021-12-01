import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QfcDefinitionRendererComponent } from './qfc-definition-renderer.component';

describe('QfcDefinitionRendererComponent', () => {
  let component: QfcDefinitionRendererComponent;
  let fixture: ComponentFixture<QfcDefinitionRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QfcDefinitionRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QfcDefinitionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
