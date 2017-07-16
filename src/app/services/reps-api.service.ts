import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SharedService } from './shared.service';

@Injectable()
export class RepsApiService {

  public baseUrl = 'http://localhost:8080';
  private urlPath = "/representatives";

  constructor(private _http: Http) { }

  getRepresentativesHouse(page: number, pageSize: number): Observable<any> {
    return SharedService.getPage(this.urlPath + "/house", page, pageSize, this._http);
  }

  getRepresentativesSenate(page: number, pageSize: number): Observable<any> {
    return SharedService.getPage(this.urlPath + "/senate", page, pageSize, this._http);
  }

  getRepresentative(uniqueId): Observable<any> {
    return SharedService.get(this.urlPath + "/" + uniqueId, this._http);
  }
}
