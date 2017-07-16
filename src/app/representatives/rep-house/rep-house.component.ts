import { Component, OnInit } from '@angular/core';
import { RepsApiService } from '../../services/reps-api.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-rep-house',
  templateUrl: './rep-house.component.html',
  styleUrls: ['./rep-house.component.less']
})
export class RepHouseComponent implements OnInit {
  private loaded: boolean = false;

  constructor(repsApiService: RepsApiService) {
    repsApiService.getRepresentativesHouse(SharedService.PAGE_ONE, SharedService.PAGE_SIZE_SMALL).subscribe( (data) => {
      this.loaded = true;
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
