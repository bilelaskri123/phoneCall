import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/models/Contact';
import { ContactService } from '../shared/services/contact.service';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  contacts: Contact[];
  filterInput: string = '';
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  filter(event) {
    this.filterInput = event;
  }

  getContacts() {
    this.contactService.getMyContacts(this.filterInput).subscribe(contactData => {
      console.log(contactData.contacts);
      this.contacts = contactData.contacts;
    });
  }

}
