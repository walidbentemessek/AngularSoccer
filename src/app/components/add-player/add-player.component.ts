import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  imagePreview:any;
  player: any = {};
  playerForm: FormGroup;
  id: any;
  title: any;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private playerService: PlayerService,
    private router: Router) { }

  ngOnInit() {
    this.playerForm = this.fb.group({
      name: [''],
      age: [''],
      team: [''],
      post: [''],
      numero: [''],
      price: [''],
      img:['']

    })
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id) {
      this.title = 'Edit Player';
      this.playerService.getPlayerById(this.id).subscribe(
        (data) => {
          this.player = data.player
        }
      )

    } else {
      this.title = 'Add Player';
    }
  }

  addEditPlayer() {
    if (this.id) {
      this.playerService.editPlayer(this.player).subscribe(
        (data) => {
          console.log('edit edit', data.message);

          this.router.navigate(['admin']);
        }
      )
    } else {
      this.playerService.addPlayer(this.player,this.playerForm.value.img).subscribe(
        (data) => {
          console.log('here add player', data.message);

          this.router.navigate(['admin']);
        }
      )

    }
    // let idPlayer = JSON.parse(localStorage.getItem('idPl') || '1');
    // this.player.id = idPlayer;
    // let playerLS = JSON.parse(localStorage.getItem('players') || '[]');
    // playerLS.push(this.player);

    // localStorage.setItem('players', JSON.stringify(playerLS));
    // localStorage.setItem('idPl', idPlayer + 1);

  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.playerForm.patchValue({ img: file });
    this.playerForm.updateValueAndValidity(); const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
