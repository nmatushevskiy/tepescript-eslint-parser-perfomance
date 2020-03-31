import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherComponentOneComponent } from './another-component-one.component';

describe('AnotherComponentOneComponent', () => {
  let component: AnotherComponentOneComponent;
  let fixture: ComponentFixture<AnotherComponentOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherComponentOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
