import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllMatchComponent } from './components/all-match/all-match.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { RegisterTeamComponent } from './components/register-team/register-team.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'addPlayer', component: AddPlayerComponent },
  { path: 'addMatch', component: AddMatchComponent },
  { path: 'allMatch', component: AllMatchComponent },
  { path: 'registerTeam', component: RegisterTeamComponent },
  { path: 'search', component: SearchComponent },

  /*dynamic path*/
  { path: 'displayMatch/:id', component: DisplayMatchComponent },
  { path: 'displayPlayer/:id', component: DisplayPlayerComponent },
  { path: 'displayTeam/:id', component: DisplayTeamComponent },
  { path: 'editMatch/:id', component: EditMatchComponent },
  { path: 'editPlayer/:id', component: AddPlayerComponent },
  { path: 'editTeam/:id', component: RegisterTeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
