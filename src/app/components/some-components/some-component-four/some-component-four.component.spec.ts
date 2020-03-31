import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponentFourComponent } from './some-component-four.component';

describe('SomeComponentFourComponent', () => {
  let component: SomeComponentFourComponent;
  let fixture: ComponentFixture<SomeComponentFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponentFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
