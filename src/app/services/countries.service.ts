import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  countriesUrl: string = 'https://restcountries.com/v2/all'

  constructor(private http: HttpClient) { }

  getAllCountries() {
    // return this.http.get(this.countriesUrl);
    return this.http.get(this.countriesUrl)
        .pipe(
          map((response: []) => response.map(item => item['name']))
  
        )
  }

  // getData() {
  //   return this.http.get(this.countriesUrl)
  //     .pipe(
  //       map((response: []) => response.map(item => item['name']))

  //     )
  // }




}
