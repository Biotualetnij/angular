import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpDamiComponent } from './sign-up-dami.component';

describe('SignUpDamiComponent', () => {
  let component: SignUpDamiComponent;
  let fixture: ComponentFixture<SignUpDamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpDamiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpDamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
