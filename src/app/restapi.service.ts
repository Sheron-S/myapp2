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

 /* public getAirQuality(country:string)
  {
    this.newUrl = this.baseUrl+"/"+country+"/?token="+this.token;
    console.log(this.newUrl);

    return this.httpClient.get(this.newUrl);
  }*/
  public  getAirQuality(country:string) {
    let result ;
    this.newUrl = this.baseUrl+"/"+country+"/?token="+this.token;
    console.log(this.newUrl);
    let promise = new Promise( resolve => {
    // return  new Promise( resolve => {
      this.httpClient.get(this.newUrl).subscribe(data => {
        result = data;
        console.log('key data ' , result);
        resolve(result);
      });
    });
    console.log("PROMISE "+promise);
    return promise;
   // return this.httpClient.get(this.baseUrlc1);
    }

}
