import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  getData () {
    let url = 'https://api.quotable.io/authors';
    return this.http.get(url);
  }
}
