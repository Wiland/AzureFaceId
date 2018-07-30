import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceIdComponent } from './face-id.component';

describe('FaceIdComponent', () => {
  let component: FaceIdComponent;
  let fixture: ComponentFixture<FaceIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
