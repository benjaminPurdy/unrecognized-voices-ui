import { Component, OnInit } from '@angular/core';
import { RepsApiService } from '../../services/reps-api.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-rep-governor',
  templateUrl: './rep-governor.component.html',
  styleUrls: ['./rep-governor.component.less']
})
export class RepGovernorComponent implements OnInit {
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
