import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contact :any={};
contactForm:FormGroup;
teamName:any;
teamId:any;

  constructor(private fb:FormBuilder, private activatedRoute:ActivatedRoute,
     private teamService:TeamService, private router:Router) { }

  ngOnInit() {
    this.teamName=this.activatedRoute.snapshot.paramMap.get('name');
    this.teamId=this.activatedRoute.snapshot.paramMap.get('id');
    this.contactForm=this.fb.group({
      name:[''],
      email:[''],
      subject:[''],
      tel:[''],
      textArea:['']

    })
  }

  sendMessage(){
    this.contact.teamId=this.teamId // avoir id du chef

    this.teamService.sendMessage(this.contact).subscribe(
      (data)=>{
        console.log('Contact Contact',data.message);
        
        this.router.navigate(['admin']);
      }
    )
  }

}
