import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const URL = 'https://reqres.in/api/colors';
const optionsHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

interface configObject {
  page?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getColors() {

    return this.http.get<any>(URL, optionsHeaders);
  }

  nextPage(page: string) {

    return this.http.get<any>(URL + `?page=${page}`, optionsHeaders);
  }
}
