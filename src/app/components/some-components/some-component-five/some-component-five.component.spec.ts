import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponentFiveComponent } from './some-component-five.component';

describe('SomeComponentFiveComponent', () => {
  let component: SomeComponentFiveComponent;
  let fixture: ComponentFixture<SomeComponentFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponentFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
