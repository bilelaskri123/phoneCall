import { Component, OnInit } from '@angular/core';
import { CallLog } from '@ionic-native/call-log/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private callLog: CallLog) {}

  ngOnInit() {
    this.callLog.getCallLog([]).then(data => {
      console.log(data);
      console.log(data.Number);
    }).catch(error => {
      console.log(error);
    });
  }

}
