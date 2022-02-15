import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
// matches:any;
@Input() childMatch:any;
@Output() newMatch: EventEmitter<any> = new EventEmitter
  constructor(private matchService:MatchService) { }

  ngOnInit() {
  }
  delete(id){
   this.matchService.deleteMatch(id).subscribe(
     ()=>{
       this.matchService.getAllMatches().subscribe(
         (data)=>{
          //  this.matches=data;
           this.newMatch.emit(data.matches);
         }
       )
     }
   )

  }
}
