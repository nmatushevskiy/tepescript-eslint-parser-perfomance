import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponentOneComponent } from './some-component-one.component';

describe('SomeComponentOneComponent', () => {
  let component: SomeComponentOneComponent;
  let fixture: ComponentFixture<SomeComponentOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponentOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
