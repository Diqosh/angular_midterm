import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { CommentService } from '../comment.service';
import {Post} from "src/app/models";
import {CreatePostDialogComponent} from "src/app/create-post-dialog/create-post-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService, private commentService: CommentService, public dialog: MatDialog) {}

  ngOnInit() {
    this.posts = this.postService.getPosts().map(post => {
      return {
        ...post,
      }
    });
  }

  toggleLike(postId: number) {
    const post: Post | undefined  = this.posts.find(p => p.id === postId);

    post!.likes += 1;
  }

  toggleComments(postId: number) {
    const post: Post | undefined = this.posts.find(p => p.id === postId);
    post!.showComments = !post!.showComments;
  }

  getCommentsByPostId(postId: number) {
    return this.commentService.getCommentsByPostId(postId);
  }

  openCreatePostDialog(): void {
    const dialogRef = this.dialog.open(CreatePostDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const Post : Post = {
          content: result.content, id: this.postService.getPosts().length + 1, like_user_id: [], likes: 0, title: result.title
        }
        this.postService.addPost(Post);
        this.posts = this.postService.getPosts().map(post => {
          return {
            ...post,
          }
        });
      }
    });
  }
}
