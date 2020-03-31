import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponentSevenComponent } from './some-component-seven.component';

describe('SomeComponentSevenComponent', () => {
  let component: SomeComponentSevenComponent;
  let fixture: ComponentFixture<SomeComponentSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponentSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponentSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
