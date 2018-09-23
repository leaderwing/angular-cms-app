import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComComponent } from './index-com.component';

describe('IndexComComponent', () => {
  let component: IndexComComponent;
  let fixture: ComponentFixture<IndexComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
