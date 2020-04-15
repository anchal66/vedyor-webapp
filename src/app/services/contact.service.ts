import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = 'https://vedyur-backend.herokuapp.com/api/contacts'

  constructor(private http:HttpClient) { }


  postContact(form){
    return this.http.post(this.url, form);
  }

  getContact() {
    return this.http.get<GetResponse>(this.url).pipe(
      map(response => response._embedded.contacts)
    );
  }
}
interface GetResponse {
  _embedded: {
    contacts: any[];
  }
}
