import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SharedService } from './shared.service';

@Injectable()
export class BillsApiService {
  private urlPath = "/bills";


  constructor(private _http: Http) { }

  getBillsHouse(page: number, pageSize: number): Observable<any> {
    return SharedService.getPage(this.urlPath + "/house", page, pageSize, this._http);
  }

  getBillsSenate(page: number, pageSize: number) {
    return SharedService.getPage(this.urlPath + "/senate", page, pageSize, this._http);
  }

  getBill(uniqueId) {
    return SharedService.get(this.urlPath + "/" + uniqueId, this._http);
  }
}
