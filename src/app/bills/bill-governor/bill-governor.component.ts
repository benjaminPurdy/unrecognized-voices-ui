import { Component, OnInit } from '@angular/core';
import { BillsApiService } from '../../services/bills-api.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-bill-governor',
  templateUrl: './bill-governor.component.html',
  styleUrls: ['./bill-governor.component.less']
})
export class BillGovernorComponent implements OnInit {
  private loaded: boolean = false;

  constructor(billsApiService: BillsApiService) {
    billsApiService.getBillsSenate(SharedService.PAGE_ONE, SharedService.PAGE_SIZE_SMALL).subscribe( (data) => {
      this.loaded = true;
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
