import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
  id: any;
  players: any;
  object: any;
  constructor(private activatedRoute: ActivatedRoute, private playerService:PlayerService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(
      (data)=>{
        
        this.object=data.player;
      }
    )
    // this.players = JSON.parse(localStorage.getItem('players'));
    // for (let i = 0; i < this.players.length; i++) {
    //   if (this.players[i].id === this.id) {
    //     this.object = this.players[i];

    //   }


    // }
  }

}
