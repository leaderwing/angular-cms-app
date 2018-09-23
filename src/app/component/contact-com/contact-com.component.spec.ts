import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComComponent } from './contact-com.component';

describe('ContactComComponent', () => {
  let component: ContactComComponent;
  let fixture: ComponentFixture<ContactComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
