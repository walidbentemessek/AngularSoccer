import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
teamURL:string='http://localhost:3000';

  constructor(private httpClient:HttpClient) { }

  addTeam(team:any,img:File){
    let formData = new FormData();
    formData.append('teamName',team.teamName);
    formData.append('dateOfCreation',team.dateOfCreation);
    formData.append('country',team.country);
    formData.append('investment',team.investment);
    formData.append('img',img);

   return this.httpClient.post<{message:any}>(`${this.teamURL}/api/addTeam`,formData);
  }

  getAllTeams(){
    return this.httpClient.get<{teams:any}>(`${this.teamURL}/api/allTeams`);
  }

  getTeamById(id){
    return this.httpClient.get<{team:any}>(`${this.teamURL}/api/allTeam/${id}`);
  }

  deleteTeam(id){
    return this.httpClient.delete<{message:any}>(`${this.teamURL}/api/deleteTeam/${id}`);
  }

  editTeam(team){
    return this.httpClient.put<{message:any}>(`${this.teamURL}/api/editTeam/${team._id}`,team);
  }

  searchByCountry(team:any){
    return this.httpClient.post<{findedByCountry:any}>(`${this.teamURL}/api/searchByCountry`,team)
  }

  sendMessage(contact:any){
    return this.httpClient.post<{message:string}>(`${this.teamURL}/api/sendMessage`, contact);
  }

  getAllMessages(){

    return this.httpClient.get<{messages:string}>(`${this.teamURL}/api/allMessages`);
  }



}
