import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSucessoComponent } from './login-sucesso.component';

describe('LoginSucessoComponent', () => {
  let component: LoginSucessoComponent;
  let fixture: ComponentFixture<LoginSucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSucessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
