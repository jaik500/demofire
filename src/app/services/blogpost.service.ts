import { inject, Injectable } from '@angular/core';
import { addDoc, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { BlogPostHelp } from '../../../src/app/common/helpers/blogpost-helper';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  firestore = inject(Firestore);
  
  constructor() { }

  createBlogPost(title: string, content: string) {

    //addDoc
      // const postCollectionReference = collection(this.firestore, "blog-post")
      // addDoc(postCollectionReference, {
      //   title: title,
      //   content: content,
      //   publishedOn: new Date(),
      //   // slug,
      //   // coverImageUrl
      // })
  
      // setDoc
      const blogPostDocumentRef = doc(this.firestore, "blog-post", BlogPostHelp.createSlug(title))
      setDoc (blogPostDocumentRef, {
        title: title,
        content: content,
        publishedOn: new Date(),
        // slug,
        // coverImageUrl
      })

  }

  
      
}
