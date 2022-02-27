import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginArgComponent } from './login-arg.component';

describe('LoginArgComponent', () => {
  let component: LoginArgComponent;
  let fixture: ComponentFixture<LoginArgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginArgComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginArgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
