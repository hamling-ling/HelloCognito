import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswordRequireComponent } from './new-password-require.component';

describe('NewPasswordRequireComponent', () => {
  let component: NewPasswordRequireComponent;
  let fixture: ComponentFixture<NewPasswordRequireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPasswordRequireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPasswordRequireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
