import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError = '';
  formModel: any;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.buldingLoginForm();
  }
  buldingLoginForm(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(submittedForm: FormGroup) {
    console.log(submittedForm);
    // this.formModel = Object.assign({}, this.loginForm.value);
    // let model: LoginModel = Object.assign(this.loginForm.value);
    // console.log(model);
    this.authService.login2(submittedForm.value.email, submittedForm.value.password).subscribe(x => {
      console.log(x);
      this.authService.extraInfo(x);
      this.router.navigateByUrl('/home');
    }, error => this.loginError = error);

    /*this.authService.login(submittedForm.value.username, submittedForm.value.password).
      subscribe(authResponse => {
        console.log('redireccion');
        this.router.navigateByUrl('/home');
    }, error => this.loginError = error);*/
  }
}
