import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  baseUrl:string=" https://waqi.info/ ";
  baseUrlc:string=" https://aqicn.org/city/chennai//velachery-res.-area/ ";

  constructor(private httpClient:HttpClient) { }

  public getTotal() {

    return this.httpClient.get(this.baseUrl);
  }
  public getcountries(){
    return this.httpClient.get(this.baseUrlc);
  }
}
