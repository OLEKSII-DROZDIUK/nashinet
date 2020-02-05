import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from "@angular/common";
import { City } from "../interfaces/city.model";

@Injectable({
    providedIn: 'root',
})

export class ApiService {
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
  };

  constructor (
  @Inject(DOCUMENT) private document: Document,
    private http: HttpClient) {}

  public getAllCities() {
    return this.http.get<City[]>(`http://localhost:4000/nashinet/getCities`, {});
  };

  public addNewCity() {
    return this.http.post(`http://localhost:4000/callback`, {});
  };

  public deleteCity() {
    return this.http.delete(`http://localhost:4000/callback`, {});
  };

};