import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/Contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  endpoint = environment.endpoint;
  constructor(private http: HttpClient) { }

  getContacts(filterInput: string) {
    let queryParam = this.endpoint + `/search?filterInput=${filterInput}`
    return this.http.get<{contacts: Contact[]}>(queryParam);
  }

  getMyContacts(filterInput: string) {
    let queryParam = this.endpoint + `/myContact?filterInput=${filterInput}`
    return this.http.get<{contacts: Contact[]}>(queryParam);
  }
}
