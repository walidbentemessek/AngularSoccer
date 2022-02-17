import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  matchForm: any = FormGroup;

  constructor(private fb: FormBuilder, private matchService:MatchService, private router:Router) { }

  ngOnInit() {
    this.matchForm = this.fb.group({
      teamOne: ['',[Validators.minLength(2),Validators.required]],
      teamTwo: ['',[Validators.minLength(2),Validators.required]],
      scoreOne: ['',[Validators.maxLength(1),Validators.required]],
      scoreTwo: ['',[Validators.maxLength(1),Validators.required]]
    })
  }
  addMatch(m: any) {
    /*console.log('this match is between',m);*/
    // let idMatch = JSON.parse(localStorage.getItem('idM') || '1');
    // m.id = idMatch;
    // let matchesLS = JSON.parse(localStorage.getItem('matches') || '[]');
    // matchesLS.push(m);
    // localStorage.setItem('matches', JSON.stringify(matchesLS));
    // localStorage.setItem('idM', idMatch + 1);
  this.matchService.addMatch(m).subscribe(
    (data)=>{
      // console.log('Add match',data.message);
      

      this.router.navigate(['admin']);

    }
  )


  }

}
