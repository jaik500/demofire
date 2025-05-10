import { Component, inject, signal } from '@angular/core';
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
import { MarkdownModule } from 'ngx-markdown';
import { MatCardModule } from '@angular/material/card';
import { ImageService } from '../../services/image.service';
import { getDownloadURL } from '@angular/fire/storage';


@Component({
    selector: 'app-create-post',
    imports: [
      FormsModule,
       MatInputModule, 
       MatButtonModule, 
       MatDividerModule, 
       MatIconModule, 
       ReactiveFormsModule, 
       MatFormFieldModule,
       MarkdownModule,
       MatCardModule
      ],
    templateUrl: './create-post.component.html',
    styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

  builder = inject(FormBuilder);
  authService = inject(AuthService);
  blogPostService = inject(BlogpostService);
  contentData = signal('');
  imageService = inject(ImageService);

  createPostForm = this.builder.nonNullable.group({
      title: ['', Validators.required],
      content: ['',  Validators.maxLength(5000)],
      coverImageUrl: ['']
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
    alert('Blog posted Successfully!');
    this.blogPostService.createBlogPost(
      this.createPostForm.getRawValue().title, 
      this.createPostForm.getRawValue().content,
      this.createPostForm.getRawValue().coverImageUrl,
    )
    this.createPostForm.reset(); // Clear form fields
  }

  onContentChange() {
    this.contentData.set(this.createPostForm.getRawValue().content)
  }

  onCoverImageSelected(input: HTMLInputElement) {
    if (!input.files || input.files.length <= 0) {
      return;
    }

    const file: File = input.files[0];

    this.imageService.uploadImage(file.name, file).
    then((snapshot) => {
      getDownloadURL(snapshot.ref)
      .then((downloadUrl) => {
        this.createPostForm.patchValue({
          coverImageUrl: downloadUrl
        });

        alert("Image uploaded successfully")
        console.log(downloadUrl);
      })
    })
  }

 

}
