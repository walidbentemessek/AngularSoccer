import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
team:any
@Input() message:any;
@Input() counter:any;
  constructor(private teamService:TeamService) { }

  ngOnInit() {

    this.getTeamById(this.message.teamId);
    
  }


  getTeamById(id){
    this.teamService.getTeamById(id).subscribe(
      (data)=>{
        this.team=data.team

      }
    )
  }

}
