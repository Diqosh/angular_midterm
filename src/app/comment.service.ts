import { Injectable } from '@angular/core';

export type Comment = {
  id: number;
  postId: number;
  content: string;
};

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  // Mock comment data
  private comments: Comment[] = [
    { id: 1, postId: 1, content: 'This is a comment on the first post.' },
    { id: 2, postId: 2, content: 'This is a comment on the second post.' }
  ];

  constructor() { }

  // Method to fetch all comments
  getComments() {
    return this.comments;
  }

  // Method to fetch comments by Post ID
  getCommentsByPostId(postId: number) {
    return this.comments.filter(comment => comment.postId === postId);
  }

  // Method to add a new comment
  addComment(comment: Comment) {
    this.comments.push(comment);
  }

  // Method to delete a comment by ID
  deleteComment(id: number) {
    const index = this.comments.findIndex(comment => comment.id === id);
    if (index > -1) {
      this.comments.splice(index, 1);
    }
  }
}
