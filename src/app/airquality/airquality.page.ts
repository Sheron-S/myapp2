import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-airquality',
  templateUrl: './airquality.page.html',
  styleUrls: ['./airquality.page.scss'],
})
export class AirqualityPage implements OnInit {

  results:any[];
  aqi;
  country:string;


  constructor( public route:Router,private actRoute:ActivatedRoute, public restApi:RestapiService) {
    
    this.actRoute.queryParams.subscribe(params => {

      console.log(params);
      this.country = params['Country'];
      console.log(this.country);
      console.log("Before calling rest service"+this.country);


      

      /*this.results = response['results'];
      console.log(this.results);
      console.log(this.results[0].parameters);
      console.log(this.results[0].value);
      console.log(this.results[0].unit);*/

    })
    
    
   }

  ngOnInit() {

      this.restApi.getAirQuality(this.country).subscribe((response)=>{
      console.log(response);
    
      const data = JSON.stringify(response);
      const jsdt  = JSON.parse(data);
      console.log(jsdt);
      this.aqi = jsdt['data'];
      console.log(this.aqi);
  });
}

}
