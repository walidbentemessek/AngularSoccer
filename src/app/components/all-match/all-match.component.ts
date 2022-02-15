import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-all-match',
  templateUrl: './all-match.component.html',
  styleUrls: ['./all-match.component.css']
})
export class AllMatchComponent implements OnInit {
match:any;
  constructor( private matchService:MatchService) { }

  ngOnInit() {
    
// this.match=JSON.parse(localStorage.getItem('matches')||'[]');
this.matchService.getAllMatches().subscribe(
  (data)=>{
    this.match=data;
  }
)
  }

}
