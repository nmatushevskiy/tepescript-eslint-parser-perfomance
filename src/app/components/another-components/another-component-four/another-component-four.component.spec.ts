import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherComponentFourComponent } from './another-component-four.component';

describe('AnotherComponentFourComponent', () => {
  let component: AnotherComponentFourComponent;
  let fixture: ComponentFixture<AnotherComponentFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherComponentFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherComponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
