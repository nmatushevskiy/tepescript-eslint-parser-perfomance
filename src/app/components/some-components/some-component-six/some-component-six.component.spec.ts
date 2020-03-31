import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponentSixComponent } from './some-component-six.component';

describe('SomeComponentSixComponent', () => {
  let component: SomeComponentSixComponent;
  let fixture: ComponentFixture<SomeComponentSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponentSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponentSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
