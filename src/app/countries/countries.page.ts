import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {} from './../airquality/airquality.page'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage  {

  countrylist =[ {"country":"india"},{"country":"austrlia"},{"country":"japan"},{"country":"auatrlia"}]
  
  country_india:string ="india";
  constructor(public router:Router) {}

  ngonInit(){}

  onclick(country:string)

  {
    console.log(country);
    {
    this.router.navigate(['airquality'] ,{queryParams : {Country : country || 'Default'}});
    }
  }
  
}
  
  
  

   

  

 


