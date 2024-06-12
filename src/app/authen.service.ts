import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenService {
  constructor(private httpService: HttpClient) {}
  token: any;
  url = 'http://localhost:8000/auth/';
  url2 = 'http://localhost:8000/products';
  register(email: string, password: string) {
    return this.httpService.post(this.url + 'register', { email, password });
  }

  getAllProduct() {
    this.token = localStorage.getItem('token');
    return this.httpService.get(this.url2, {
      headers: {
        authorization: `Bearer ${this.token}`,
      },
    });
  }
}
