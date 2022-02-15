import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches:any;

  constructor(private matchService:MatchService) { }

  ngOnInit() {
    // this.matches = JSON.parse(localStorage.getItem('matches')||'[]');
   this.matchService.getAllMatches().subscribe(
     (data)=>{
       this.matches=data.matches;
     }
   )
}
update(x){
  this.matches=x;
}

}
