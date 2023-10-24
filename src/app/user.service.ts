import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Mock user data
  private users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];

  constructor() { }

  // Method to fetch all users
  getUsers() {
    return this.users;
  }

  // Method to fetch a user by ID
  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }
}
