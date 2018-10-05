import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {

  private readonly _url = 'https://api.github.com/users/mosh-hamedani/followers';
  constructor(private http: Http) { }

  getFollowers() {
    return this.http.get(this._url)
    .pipe(map(response => response.json()));
  }
}
