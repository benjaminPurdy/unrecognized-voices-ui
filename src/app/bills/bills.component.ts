import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.less']
})
export class BillsComponent implements OnInit {
  section: String;

  constructor() { }

  ngOnInit() {
    console.log(this.section);
  }


  tabChange(tabName) {
    this.section = tabName;
  }

}
