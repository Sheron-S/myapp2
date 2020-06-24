import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { ActivatedRoute, Router} from '@angular/router'
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-airquality',
  templateUrl: './airquality.page.html',
  styleUrls: ['./airquality.page.scss'],
})
export class AirqualityPage implements OnInit {

  results:any[];
  aqi;
  dataloading = false;
  country:string;


  constructor( public route:Router,private actRoute:ActivatedRoute, public loadingController: LoadingController,public restApi:RestapiService) {
    
    this.actRoute.queryParams.subscribe(params => {

      console.log(params);
      this.country = params['Country'];
      console.log(this.country);
      this.getAirQuality();
    })
    
   }

  ngOnInit() {

  }
  getAirQuality()
  {
    this.dataloading = true;
    this.restApi.getAirQuality(this.country).then(response => {
      const data = JSON.stringify(response);
      const jsdt = JSON.parse(data);
      console.log(jsdt);
      this.aqi = jsdt['data'];
     this.dataloading = false;
    });

  }

  

}
