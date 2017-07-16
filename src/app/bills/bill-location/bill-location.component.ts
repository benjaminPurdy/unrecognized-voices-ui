import { Component, OnInit } from '@angular/core';
import { BillsApiService } from '../../services/bills-api.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-bill-location',
  templateUrl: './bill-location.component.html',
  styleUrls: ['./bill-location.component.less']
})
export class BillLocationComponent implements OnInit {
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
