import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { map, observable, Observable, tap } from 'rxjs';
import { Work } from '../models/Work';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TrabsService {

  Url = "https://localhost:7184/api/Work"

  constructor(private http: HttpClient) { }

  GetAll(): Observable<Work[]> {

    return this.http.get<Work[]>(this.Url)
  }

  GetWorkID(id: number): Observable<Work> {
    const apiURL = `${this.Url}/id?id=${id}`;

    return this.http.get<Work>(apiURL)
  }

  FilterWorks(name: string): Observable<Work[]> {
    const apiURL = `${this.Url}/name?name=${name}`;

    return this.http.get<Work[]>(apiURL)
  }

  DeleteWork(WorkId: number): Observable<any> {
    const apiURL = `${this.Url}/${WorkId}`;
    return this.http.delete<number>(apiURL, httpOptions)
  }

  PostWork(work : Work) : Observable<any> {
    return this.http.post<Work>(this.Url, work, httpOptions)
  }

  GetPDF(id : number) : Observable<any> {

    const apiURL = `${this.Url}/id?id=${id}`;

    return this.http.get<Work>(apiURL)
  }

}
