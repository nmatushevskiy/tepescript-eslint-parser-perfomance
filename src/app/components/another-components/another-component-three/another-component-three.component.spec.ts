import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherComponentThreeComponent } from './another-component-three.component';

describe('AnotherComponentThreeComponent', () => {
  let component: AnotherComponentThreeComponent;
  let fixture: ComponentFixture<AnotherComponentThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherComponentThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
