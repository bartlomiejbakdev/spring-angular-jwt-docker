import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Data} from "./app.component";


@Injectable(
  {
    providedIn: "root" //do wykorzytania przez root czyli app component
  }
)

export class AppService{
  title = 'frontend-jwt';
  email = '';
  password = '';
  private header = new HttpHeaders();


  constructor(private httpClient: HttpClient) {
  }

  loginApi(payload: any) {
    return this.httpClient.post('http://localhost:8080/auth/login', payload)
  }


  getData(token: string) : Observable<Data[]> {
    this.header = this.header.set('Authorization', 'Bearer ' + token);
    return this.httpClient.get<Data[]>('http://localhost:8080/api/books', {'headers': this.header})
  }

}
