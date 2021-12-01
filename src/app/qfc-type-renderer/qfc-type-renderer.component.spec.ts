import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QfcTypeRendererComponent } from './qfc-type-renderer.component';

describe('QfcTypeRendererComponent', () => {
  let component: QfcTypeRendererComponent;
  let fixture: ComponentFixture<QfcTypeRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QfcTypeRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QfcTypeRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
