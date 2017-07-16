import { Component, OnInit } from '@angular/core';
import { BillsApiService } from '../../services/bills-api.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-bill-house',
  templateUrl: './bill-house.component.html',
  styleUrls: ['./bill-house.component.less']
})
export class BillHouseComponent implements OnInit {
  private loaded: boolean = false;

  constructor(billsApiService: BillsApiService) {
    billsApiService.getBillsHouse(SharedService.PAGE_ONE, SharedService.PAGE_SIZE_SMALL).subscribe( (data) => {
      this.loaded = true;
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
