import { Injectable } from '@angular/core';
import {Post} from "src/app/models";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // Mock post data
  private posts: Post[] = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', likes: 0, like_user_id: [] },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.',  likes: 0, like_user_id: [] }
  ];

  constructor() { }

  getPosts() {
    return this.posts;
  }

  getPostById(id: number) {
    return this.posts.find(post => post.id === id);
  }

  addPost(post: Post) {
    this.posts = [...this.posts, post];
  }
}
