import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponentEightComponent } from './some-component-eight.component';

describe('SomeComponentEightComponent', () => {
  let component: SomeComponentEightComponent;
  let fixture: ComponentFixture<SomeComponentEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponentEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponentEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
