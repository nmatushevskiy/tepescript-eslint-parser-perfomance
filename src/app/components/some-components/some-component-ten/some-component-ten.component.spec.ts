import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponentTenComponent } from './some-component-ten.component';

describe('SomeComponentTenComponent', () => {
  let component: SomeComponentTenComponent;
  let fixture: ComponentFixture<SomeComponentTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponentTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponentTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
