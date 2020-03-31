import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherComponentSixComponent } from './another-component-six.component';

describe('AnotherComponentSixComponent', () => {
  let component: AnotherComponentSixComponent;
  let fixture: ComponentFixture<AnotherComponentSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherComponentSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherComponentSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
