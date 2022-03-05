import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDamiComponent } from './login-dami.component';

describe('LoginDamiComponent', () => {
  let component: LoginDamiComponent;
  let fixture: ComponentFixture<LoginDamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDamiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
