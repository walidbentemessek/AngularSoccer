import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
@Input() childPlayer:any;

  constructor(private router:Router) { }

  ngOnInit() {

  }
  goToReadMore(id:any){
   this.router.navigate([`displayPlayer/${id}`]);

  }

}
