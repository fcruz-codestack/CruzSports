import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }
  getFeed(url: string): Observable<any> {
    return this.http.get<any>(url, {
      headers: {
        authorization:
          'Basic ZWZmNDU4YTQtN2M0Ni00NGY5LTgwYjUtY2QzY2U2OkN1aXRsYWh1YWMyOA=='
      }
    });
  }
}
