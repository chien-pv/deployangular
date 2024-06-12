import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AuthenService } from '../authen.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastrModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(
    private authenService: AuthenService,
    private route: Router,
    private toastr: ToastrService
  ) {}
  err: any;
  onSubmit(form: NgForm) {
    this.authenService
      .register(form.value.email, form.value.password)
      .subscribe(
        (data: any) => {
          this.toastr.success('Register succesfully!');
          localStorage.setItem('token', data.access_token);
          this.route.navigate(['/home']);
        },
        (error) => {
          this.err = error;
        }
      );
  }
}
