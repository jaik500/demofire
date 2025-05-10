import { Component, inject } from '@angular/core';
import { DashboardStatisticsComponent } from "../dashboard-statistics/dashboard-statistics.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BlogpostService } from '../../../services/blogpost.service';
import { toSignal } from '@angular/core/rxjs-interop'
import { collection, Firestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardStatisticsComponent, 
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  blogPostService = inject(BlogpostService);
  firestore = inject(Firestore);

  // blogPosts = toSignal(this.blogPostService.getBlogPosts());
  blogPosts = toSignal(this.blogPostService.getAllBlogs());

  // collection ref
  //colRef = collection(this.firestore, "blog-post")

 
 

}
