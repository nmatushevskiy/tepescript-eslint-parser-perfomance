import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponentThreeComponent } from './some-component-three.component';

describe('SomeComponentThreeComponent', () => {
  let component: SomeComponentThreeComponent;
  let fixture: ComponentFixture<SomeComponentThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponentThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
