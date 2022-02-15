import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  team: any = {};
  teams: any;
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private teamService: TeamService, private router: Router) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      country: [''],



    })
  }
  search() {
    this.teamService.searchByCountry(this.team).subscribe(
      (data) => {
        this.teams = data.findedByCountry;
      }
    )

  }

  contact(id: any, name: any) {
    this.router.navigate(['contact', { id, name }]);
  }


}
