import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matter } from '../models/Matter';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class MatterService {

  Url = "https://localhost:7184/api/Matter"

  constructor(private http: HttpClient) { }

  GetAll(): Observable<Matter[]> {

    return this.http.get<Matter[]>(this.Url)
  }
}
