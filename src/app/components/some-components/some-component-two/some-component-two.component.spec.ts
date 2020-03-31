import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponentTwoComponent } from './some-component-two.component';

describe('SomeComponentTwoComponent', () => {
  let component: SomeComponentTwoComponent;
  let fixture: ComponentFixture<SomeComponentTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
