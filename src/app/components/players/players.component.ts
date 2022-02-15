import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
players:any;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    // this.players=JSON.parse(localStorage.getItem('players'));
    this.playerService.getAllPlayers().subscribe(
      (data)=>{
        this.players=data.players;
      }
    )
  }

}
