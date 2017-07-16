import { Component, OnInit } from '@angular/core';
import { RepsApiService } from '../../services/reps-api.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-rep-location',
  templateUrl: './rep-location.component.html',
  styleUrls: ['./rep-location.component.less']
})
export class RepLocationComponent implements OnInit {
  private loaded: boolean = false;

  constructor(repsApiService: RepsApiService) {
    repsApiService.getRepresentativesSenate(SharedService.PAGE_ONE, SharedService.PAGE_SIZE_SMALL).subscribe( (data) => {
      this.loaded = true;
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
