import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  id: any;
  matches: any;
  objets: any;
  constructor(private ActivatedRoute: ActivatedRoute, private matchService:MatchService) { }

  ngOnInit() {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      (data)=>{
        this.objets=data.match;
      }
    )
    // this.matches = JSON.parse(localStorage.getItem('matches'));
    // for (let i = 0; i < this.matches.length; i++) {
    //   if (this.matches[i].id == this.id) {
    //     this.objets = this.matches[i];

    //   }
    // }
  }

}
