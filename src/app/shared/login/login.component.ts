import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormUtils } from '@utils/form-utils';


@Component({
  selector: 'login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private route = inject(Router);

  fb = inject(FormBuilder);
  formUtils = FormUtils;

  formLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.pattern( this.formUtils.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSave(){
    this.formLogin.markAllAsTouched();

    if(this.formLogin.valid){
      this.route.navigate(['/board']);
    }
  }

}
