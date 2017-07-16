import { Component, OnInit } from '@angular/core';
import { RepsApiService } from '../services/reps-api.service';


@Component({
  selector: 'app-representatives',
  templateUrl: './representatives.component.html',
  styleUrls: ['./representatives.component.less']
})
export class RepresentativesComponent implements OnInit {
  private activeTab = 'all';

  constructor() { }

  ngOnInit() {
  }


  tabChange(tabName) {
    this.activeTab = tabName;
  }

}
