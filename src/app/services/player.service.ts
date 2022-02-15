import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
// playerURL:string='api/players'
playerURL: string='http://localhost:3000';

  constructor(private httpClient:HttpClient) { }

  getPlayerById(id){

    return this.httpClient.get<{player:any}>(`${this.playerURL}/api/allPlayers/${id}`);
  }

  getAllPlayers(){
    return this.httpClient.get<{players:any}>(`${this.playerURL}/api/allPlayers`);
  }

  deletePlayer(id){
     return this.httpClient.delete<{message:string}>(`${this.playerURL}/api/deletePlayer/${id}`);
  }

  editPlayer(player){
    return this.httpClient.put<{message:string}>(`${this.playerURL}/api/editPlayer/${player._id}`,player);
  }

  addPlayer(player:any,img:File){
    let formData = new FormData();
    formData.append('name',player.name);
    formData.append('age',player.age);
    formData.append('team',player.team);
    formData.append('post',player.post);
    formData.append('numero',player.numero);
    formData.append('price',player.price);
    formData.append('img',img);
    return this.httpClient.post<{message:string}>(`${this.playerURL}/api/addPlayer`,formData);

    }
    
  
}
