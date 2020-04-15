import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url= "https://vedyur-backend.herokuapp.com/api/auths";

  loggedIn = false;

  constructor(private http:HttpClient) { }

  postAuth(form){
    return this.http.post(this.url, form);
  }
  getAuth(){
    return this.http.get<GetResponse>(this.url).pipe(
      map(response => response._embedded.auths)
    );
  }
}

interface GetResponse {
  _embedded: {
    auths: any[];
  }
}
