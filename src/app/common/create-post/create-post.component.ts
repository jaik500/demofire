import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { addDoc, collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service';
import { BlogpostService } from '../../services/blogpost.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

  builder = inject(FormBuilder);
    authService = inject(AuthService);
    blogPostService = inject(BlogpostService);

  createPostForm = this.builder.nonNullable.group({
      title: ['', Validators.required],
      content: ['', Validators.maxLength(5000)],
  })

  get title() {
    return this.createPostForm.controls.title
  }

  get content() {
    return this.createPostForm.controls.title
  }

  onSubmit() {
    //console.log(this.createPostForm.value);
    if (this.createPostForm.invalid) {
      return;
    }

    this.blogPostService.createBlogPost(
      this.createPostForm.getRawValue().title, 
      this.createPostForm.getRawValue().content
    )
    
  }

 

}
