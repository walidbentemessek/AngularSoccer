import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
countriesUrl : string = 'https://restcountries.com/v2/all'

  constructor(private http:HttpClient) { }

  getAllCountries(){
    return this.http.get(this.countriesUrl);
  }




}
