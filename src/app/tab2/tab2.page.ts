import {Component, OnInit} from '@angular/core';
import {Contact} from '../shared/models/Contact';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  contacts: Contact[];
  filterInput: string = '';
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.getContacts(this.filterInput);
  }

  filter(event) {
    this.getContacts(event);
  }

  getContacts(filterInput) {
    this.contactService.getContacts(filterInput).subscribe(contactData => {
      console.log(contactData.contacts);
      this.contacts = contactData.contacts;
    });
  }

}
