import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions ={
  headers : new HttpHeaders({
    'content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MatchService {

// matchURL:string='api/matches';
  //  matchURL:string= 'http://localhost:3000';
   urlFake: string = 'http://localhost:5000/matches'

  constructor(private httpClient:HttpClient) { }

  getMatchById(id){
   
    return this.httpClient.get(`${this.urlFake}/${id}`); 
  // return this.httpClient.get<{match:any}>(`${this.matchURL}/api/allMatches/${id}`);
  }

  getAllMatches(){
  //  return this.httpClient.get<{matches:any}>(`${this.matchURL}/api/allMatches`);
   return this.httpClient.get(this.urlFake);
  }

  // displayMatch(id){
  // return this.httpClient.get(`${this.matchURL}/${id}`);
  // }

  addMatch(match){
    // return this.httpClient.post<{message:string}>(`${this.matchURL}/api/addMatch`,match);
    return this.httpClient.post(this.urlFake,match, httpOptions);
  }

  editMatch(match){
    // return this.httpClient.put<{message:string}>(`${this.matchURL}/api/editMatch/${match.id}`,match);
    return this.httpClient.put(`${this.urlFake}/${match.id}`,match,httpOptions)
  }

  deleteMatch(id){
    // return this.httpClient.delete<{message:string}>(`${this.matchURL}/api/deleteMatch/${id}`);
    return this.httpClient.delete(`${this.urlFake}/${id}`); 
  }
}
