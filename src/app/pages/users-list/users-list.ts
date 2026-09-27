import { Component } from '@angular/core';
import { USER_LIST_DATA } from '../../data/user-list-data';
import { POST_LIST_DATA } from '../../data/post-list-data';

@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList {
  users = USER_LIST_DATA.users;
  posts = POST_LIST_DATA.posts;

  getPostsByUser(userId: number) {
    return this.posts.filter(post => post.userId === userId);
  }
}
