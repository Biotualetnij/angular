import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupArgComponent } from './signup-arg.component';

describe('SignupArgComponent', () => {
  let component: SignupArgComponent;
  let fixture: ComponentFixture<SignupArgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupArgComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupArgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
