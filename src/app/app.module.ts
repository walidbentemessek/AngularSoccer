import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatchComponent } from './components/match/match.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { PlayerComponent } from './components/player/player.component';
import { AllMatchComponent } from './components/all-match/all-match.component';
import { MatchWinLossComponent } from './components/match-win-loss/match-win-loss.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { RegisterTeamComponent } from './components/register-team/register-team.component';
import { TeamComponent } from './components/team/team.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { SearchComponent } from './components/search/search.component';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MatchesComponent,
    PlayersComponent,
    BlogComponent,
    ContactComponent,
    MatchComponent,
    AdminComponent,
    AddPlayerComponent,
    AddMatchComponent,
    
    DisplayMatchComponent,
    DisplayPlayerComponent,
    PlayerComponent,
    AllMatchComponent,
    MatchWinLossComponent,
    EditMatchComponent,
    RegisterTeamComponent,
    TeamComponent,
    DisplayTeamComponent,
    SearchComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
    // InMemoryWebApiModule.forRoot(DataService),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }