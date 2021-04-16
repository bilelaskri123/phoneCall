import { Component, OnInit } from '@angular/core';
import { CallLog } from '@ionic-native/call-log/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  myContacts = [];
  constructor(private callLog: CallLog, private callNumber: CallNumber) {}

  ngOnInit() {
    this.callLog.getCallLog([]).then(data => {
      this.myContacts = data;
    }).catch(error => {
      console.log(error);
    });
  }

  callNow(num: string) {
    this.callNumber.callNumber(num, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
