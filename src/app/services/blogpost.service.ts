import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, CollectionReference, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { BlogPostHelp } from '../../../src/app/common/helpers/blogpost-helper';
import { BlogPost } from '../models/blogpost';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  firestore = inject(Firestore);
  
  constructor() { }

  createBlogPost(title: string, content: string, coverImageUrl: string) {

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
        coverImageUrl: coverImageUrl
      })

  }

  getBlogPosts(): Observable<BlogPost[]> {
    const blogPostCollectionRef = collection(this.firestore, "blog-post");
    return collectionData(blogPostCollectionRef, {
      idField: 'slug' // mapping the slug property to the id field of the firestore database 
    }) as Observable<BlogPost[]>;
  }

  getAllBlogs(): Observable<BlogPost[]> {
  const blogPostCollectionRef = collection(this.firestore, 'blog-post') as CollectionReference<BlogPost>;
 
  return collectionData(blogPostCollectionRef, {
    idField: 'slug',
  }) as Observable<BlogPost[]>;
}


  
  
      
}
