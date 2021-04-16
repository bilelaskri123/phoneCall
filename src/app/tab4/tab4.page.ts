import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/models/Contact';
import { ContactService } from '../shared/services/contact.service';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  contacts: Contact[];
  filterInput: string = '';
  constructor(private contactService: ContactService, private callNumber: CallNumber) { }

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

  callNow(num: string) {
    this.callNumber.callNumber(num, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
