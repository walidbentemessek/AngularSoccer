import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

// matchURL:string='api/matches';
   matchURL:string= 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }

  getMatchById(id){
  return this.httpClient.get<{match:any}>(`${this.matchURL}/api/allMatches/${id}`);
  }

  getAllMatches(){
   return this.httpClient.get<{matches:any}>(`${this.matchURL}/api/allMatches`);
  }

  // displayMatch(id){
  // return this.httpClient.get(`${this.matchURL}/${id}`);
  // }

  addMatch(match){
    return this.httpClient.post<{message:string}>(`${this.matchURL}/api/addMatch`,match);
  }

  editMatch(match){
    return this.httpClient.put<{message:string}>(`${this.matchURL}/api/editMatch/${match.id}`,match);
  }

  deleteMatch(id){
    return this.httpClient.delete<{message:string}>(`${this.matchURL}/api/deleteMatch/${id}`);
  }
}
