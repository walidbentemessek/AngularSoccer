import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = 'http://localhost:3001'
  constructor(private httpClient: HttpClient) { }

  signup(user) {
    return this.httpClient.post<{ message: string }>(`${this.userURL}/api/signup`, user);
  }

  getAllUsers() {
    return this.httpClient.get<{ users: any }>(`${this.userURL}/api/allUsers`)
  }

  deleteUser(id) {
    return this.httpClient.delete<{ message: any }>(`${this.userURL}/api/deleteUser/${id}`);
  }

  login(user) {
    return this.httpClient.post<{ message: any }>(`${this.userURL}/api/login`, user);
  }



}
