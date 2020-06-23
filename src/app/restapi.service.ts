import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  baseUrl:string ="http://api.waqi.info/feed";
  newUrl:string;
  token:string ='d37805a8cce7d5d9040024032ae055791635a9f2'

  

  constructor(private httpClient:HttpClient) {}
   
  public gettotal(){
    //return this.httpClient.get(this.baseUrl);
  }

  public getAirQuality(country:string)
  {
    this.newUrl = this.baseUrl+"/"+country+"/?token="+this.token;
    console.log(this.newUrl);

    return this.httpClient.get(this.newUrl);
  }


}