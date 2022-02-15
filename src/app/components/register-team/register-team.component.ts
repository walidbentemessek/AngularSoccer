import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css']
})
export class RegisterTeamComponent implements OnInit {
  teamForm: FormGroup;
  team: any = {};
  imagePreview:any;
  id: any;
  titre: any;
  constructor(private fb: FormBuilder, private router: Router, private teamService: TeamService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.teamForm = this.fb.group({
      teamName: [''],
      dateOfCreation: [''],
      country: [''],
      investment: [''],
      img:['']

    });
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id) {
      this.titre = 'Edit Team'
      this.teamService.getTeamById(this.id).subscribe(
        (data) => {
          this.team = data.team;
        }
      )
    } else {
      this.titre = 'Register team'
    }
  }

  registerEditTeam() {
    if (this.id) {
      this.teamService.editTeam(this.team).subscribe(
        (data) => {
          console.log('edit team', data.message);
          this.router.navigate(['admin']);

        });
    } else {
      this.teamService.addTeam(this.team,this.teamForm.value.img).subscribe(
        (data) => {
          console.log('add team', data.message);
          this.router.navigate(['admin']);
        });

    }


  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.teamForm.patchValue({ img: file });
    this.teamForm.updateValueAndValidity(); const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
