import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherComponentTwoComponent } from './another-component-two.component';

describe('AnotherComponentTwoComponent', () => {
  let component: AnotherComponentTwoComponent;
  let fixture: ComponentFixture<AnotherComponentTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherComponentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
