import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-win-loss',
  templateUrl: './match-win-loss.component.html',
  styleUrls: ['./match-win-loss.component.css']
})
export class MatchWinLossComponent implements OnInit {
  @Input() childMatch1: any;
  constructor() { }

  ngOnInit() {
  }


  scoreStyle(score1, score2) {

    if (score1 > score2) {
      return '0';


    } else if (score1 < score2) {
      return '1';

    } else {
      return '2';
    }

  }

  resultStyle(score1, score2) {
    if (score1 > score2) {
      return 'win';

    } else if (score1 < score2) {
      return 'loss';
    } else {
      return 'draw'
    }

  }

}
