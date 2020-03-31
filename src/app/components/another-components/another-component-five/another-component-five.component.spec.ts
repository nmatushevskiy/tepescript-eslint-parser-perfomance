import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherComponentFiveComponent } from './another-component-five.component';

describe('AnotherComponentFiveComponent', () => {
  let component: AnotherComponentFiveComponent;
  let fixture: ComponentFixture<AnotherComponentFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherComponentFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherComponentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
