import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpComComponent } from './help-com.component';

describe('HelpComComponent', () => {
  let component: HelpComComponent;
  let fixture: ComponentFixture<HelpComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
