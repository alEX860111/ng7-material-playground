import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyTableComponentComponent } from './fancy-table-component.component';

describe('FancyTableComponentComponent', () => {
  let component: FancyTableComponentComponent;
  let fixture: ComponentFixture<FancyTableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyTableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
