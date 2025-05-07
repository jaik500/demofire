import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
        MatCardModule,
        MatButtonModule,
        CommonModule,
        ReactiveFormsModule,
        RouterLink,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  //registerform: any; // for use with formbuilder
  createdate = new Date();

  builder = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  http = inject(HttpClient);
  errorMessage: string | null = null;

  constructor() {}

  registerForm = this.builder.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required ]
  })

  onSubmit(): void {
    const rawForm = this.registerForm.getRawValue();
    this.authService.register(rawForm.email, rawForm.username, rawForm.password).subscribe({
      next: () => {
        alert('Registered Successfully!');
        this.router.navigateByUrl('/login');
        console.log('register ' + rawForm.email);
      },
      error: (err) => {
        this.errorMessage = err.code;
      }
    })
  }

  

}
