import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  matches: any;
  players: any;
  teams: any;
  users: any;
  messages: any;
  isEmpty: any;
  isEmpty1: any;
  constructor(private router: Router, private matchService: MatchService, private playerService: PlayerService,
    private teamService: TeamService, private userService: UserService) { }

  ngOnInit() {
    // this.matches = JSON.parse(orage.getItem('matches'));
    this.matchService.getAllMatches().subscribe(
      (data) => {
        this.matches = data.matches;
        this.isEmpty = (this.matches.length == 0) ? true : false;
      }
    )

    // this.players = JSON.parse(localStorage.getItem('players'));
    this.playerService.getAllPlayers().subscribe(
      (data) => {
        console.log('here data', data);

        this.players = data.players;
        this.isEmpty1 = (this.matches.length == 0) ? true : false;
      }
    )

    // this.players = [
    //   { id: 1, firstName: 'James', lastName: 'Green', age: '23', team: 'Wales' }
    // ];
    this.teamService.getAllTeams().subscribe(
      (data) => {
        this.teams = data.teams;
      });

    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data.users;
      }
    )

    this.getAllMessages();  //appel fonction dans ngOnInit()

  }
  //////////////////////// matches

  displayMatch(id) {
    this.router.navigate([`displayMatch/${id}`]);
  }

  editMatch(id) {
    this.router.navigate([`editMatch/${id}`]);
  }

  deleteMatch(id) {
    this.matchService.deleteMatch(id).subscribe(
      (data) => {
        console.log('delete match', data.message);

        this.matchService.getAllMatches().subscribe(
          (data) => {
            this.matches = data.matches;
          }
        )
      }
    )
  }

  ///////////////////////// players

  displayPlayer(id: any) {
    this.router.navigate([`displayPlayer/${id}`]);
  }

  deletePlayer(id) {
    this.playerService.deletePlayer(id).subscribe(
      (data) => {
        console.log('here delete player', data.message);

        this.playerService.getAllPlayers().subscribe(
          (data) => {
            this.players = data.players;
          }
        )
      }
    )
  }

  editPlayer(id) {
    this.router.navigate([`editPlayer/${id}`]);
  }

  ///////////////////Teams

  deleteTeam(id) {
    this.teamService.deleteTeam(id).subscribe(
      (data) => {
        console.log('delete team', data.message);
        this.teamService.getAllTeams().subscribe(
          (data) => {
            this.teams = data.teams;
          });

      });
  }

  editTeam(id) {
    this.router.navigate([`editTeam/${id}`]);
  }

  displayTeam(id: any) {
    this.router.navigate([`displayTeam/${id}`]);
  }

  ////////////////////////// users

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(
      (data) => {
        console.log('delete user', data.message);
        this.userService.getAllUsers().subscribe(
          (data) => {
            this.users = data.users;

          });

      });
  }

  getAllMessages() {
    this.teamService.getAllMessages().subscribe(
      (data) => {

        this.messages = data.messages;
      }
    )
  }
}
