import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabletService {

  private baseUrl = 'http://localhost:8080/tablets';

  constructor(private http: HttpClient) { }

  getTabletsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getTablet(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteTablet(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
