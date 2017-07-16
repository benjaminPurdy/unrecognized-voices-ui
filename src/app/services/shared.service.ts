import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SharedService {

  public static PAGE_ONE: number = 1;
  public static PAGE_SIZE_SMALL: number = 3;
  public static PAGE_SIZE_LARGE: number = 10;
  public static BASE_URL: string = 'http://localhost:8080';

  constructor() { }

  public static getPage(path, pageNumber, itemsPerPage, http): Observable<any> {
      return http.get(this.BASE_URL + path + "?page=" + pageNumber + "&pageSize=" + itemsPerPage);
  }

  public static get(path, http): Observable<any> {
      return http.get(this.BASE_URL + path);
  }

}
