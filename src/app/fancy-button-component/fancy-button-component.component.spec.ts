import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyButtonComponentComponent } from './fancy-button-component.component';

describe('FancyButtonComponentComponent', () => {
  let component: FancyButtonComponentComponent;
  let fixture: ComponentFixture<FancyButtonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyButtonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
