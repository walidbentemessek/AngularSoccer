import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  id: any;
  matchForm: FormGroup;
  match: any = {};
  constructor(private activatedRoute: ActivatedRoute, private matchService: MatchService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.matchForm = this.fb.group({
      teamOne: ['', [Validators.minLength(2), Validators.required]],
      teamTwo: ['', [Validators.minLength(2), Validators.required]],
      scoreOne: ['', [Validators.maxLength(1), Validators.required]],
      scoreTwo: ['', [Validators.maxLength(1), Validators.required]]
    })
    this.id =  this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      (data) => {
        this.match = data.match;
      }
    )

  }

  editMatch(c) {
    // c.id = this.id;
    let editMatch = {
      id: this.id,
      teamOne: this.match.teamOne,
      teamTwo: this.match.teamTwo,
      scoreOne: this.match.scoreOne,
      scoreTwo: this.match.scoreTwo
      
    }
    this.matchService.editMatch(editMatch).subscribe(
      (data) => {
        console.log('edit match', data.message);

        this.router.navigate(['admin']);
      }
    )
  }

}

