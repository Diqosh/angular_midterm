import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {PostService} from "src/app/post.service";
import {Post} from "src/app/models";

@Component({
  selector: 'app-create-post-dialog',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post-dialog.component.css']
})
export class CreatePostDialogComponent {

  post = {
    title: '',
    content: ''
  };

  constructor(public dialogRef: MatDialogRef<CreatePostDialogComponent>,private postService: PostService) {}

  onSubmit() {

    this.dialogRef.close(this.post);
  }

  onClose() {
    this.dialogRef.close(); // Simply close the dialog without sending data
  }
}
