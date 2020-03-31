import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponentNineComponent } from './some-component-nine.component';

describe('SomeComponentNineComponent', () => {
  let component: SomeComponentNineComponent;
  let fixture: ComponentFixture<SomeComponentNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponentNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponentNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
